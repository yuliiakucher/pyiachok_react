import React, {useEffect} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/cjs/Button";
import {Formik, useFormik, useFormikContext} from "formik";
import * as yup from "yup";
import './bootstrap-multiselect.css'
import {connect} from "react-redux";
import {getResponseInfo, getTagsInfo} from "../../../redux/place-reducer";
import CustomAlert from "../../Alerts/CustomAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomMap from "../../CustomMap/CustomMap";


const CreatePlace = (props) => {

    useEffect(() => {
        props.getTagsInfo()
    }, [props.lat])

    const arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    const initialValues = {
        name: '',
        address: '',
        email: '',
        contacts: '',
        type: {type_name: 'bar'},
        tags: [{}],
        specificities: [{}],
        schedule: {
            'monday_start': '00',
            'monday_end': '00',
            'monday_check': false,
            'tuesday_start': '00',
            'tuesday_end': '00',
            'tuesday_check': false,
            'wednesday_start': '00',
            'wednesday_end': '00',
            'wednesday_check': false,
            'thursday_start': '00',
            'thursday_end': '00',
            'thursday_check': false,
            'friday_start': '00',
            'friday_end': '00',
            'friday_check': false,
            'saturday_start': '00',
            'saturday_end': '00',
            'saturday_check': false,
            'sunday_start': '00',
            'sunday_end': '00',
            'sunday_check': false,
        },
        coordinates: ''
    }

    const onSubmit = values => {
        console.log(values)

        values.coordinates = ({'lat': props.lat, 'lng': props.lng})
        const my_map = new Map()
        const sch = arr.map(day => my_map.set(day, values.schedule[`${day}_start`].concat(values.schedule[`${day}_end`])))
        values.schedule = Object.fromEntries(sch[0])
        props.getResponseInfo(values)
    }



    const validationSchema = yup.object({
        // name: yup.string().required('Введите название'),
        // address: yup.string().required('Введите адрес'),
        // email: yup.string().email('Email is not valid')
        //     .required('Введите вашу эл. почту')
        // ,
        // contacts: yup.string().matches(/^(\+\d{1,12})$/, 'Номер телефона должен содержать только цифры')
        //     .required('Введите ваши контакты')
    })
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({
                      handleChange,
                      handleBlur,
                      touched,
                      errors,
                      handleSubmit,
                      validateForm, values

                  }) => {
                    return (
                        <Container className={'m-3'}>
                            <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Название</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='name'
                                            isValid={touched.name && !errors.name}
                                        />
                                        {touched.name && errors.name ?
                                            <Form.Text>{errors.name} </Form.Text> : null}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Адрес</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='address'
                                            isValid={touched.address && !errors.address}
                                        />
                                        {touched.address && errors.address ?
                                            <Form.Text>{errors.address} </Form.Text> : null}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Электронная почта</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='email'
                                            isValid={touched.email && !errors.email}
                                        />
                                        {touched.email && errors.email ?
                                            <Form.Text>{errors.email} </Form.Text> : null}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Контакты</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="+38"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='contacts'
                                            isValid={touched.contacts && !errors.contacts}
                                        />
                                        {touched.contacts && errors.contacts ?
                                            <Form.Text>{errors.contacts} </Form.Text> : null}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Col lg={4}>

                                    <Form.Group>
                                        <Form.Label>Тип заведения</Form.Label>
                                        <Form.Control as="select" name='type.type_name' onChange={handleChange}>
                                            {props.type.map(type => (
                                                <option value={type.type_name} key={type.id}>
                                                    {type.type_name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                            </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Теги</Form.Label>
                                        <Form.Control as="select" multiple name='tags' onChange={handleChange}>
                                            {props.tags.map(tag => (
                                                <option value={tag.tag_name} key={tag.id}>
                                                    {tag.tag_name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>


                                <Col lg={5}>
                                    <Form.Group>
                                        <Form.Label>Особенности</Form.Label>
                                        <Form.Control as="select" multiple name='specificities' onChange={handleChange}>
                                            {props.spec.map(spec => (
                                                <option value={spec.specificity_name}  key={spec.id}>
                                                    {spec.specificity_name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>


                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>График</Form.Label>
                                            {arr.map(day => (
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>
                                                            {day}
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Checkbox
                                                            onChange={handleChange}
                                                            name={`schedule.${day}_check`}
                                                        />
                                                    </InputGroup.Prepend>
                                                    <InputGroup.Text>
                                                        Открытие
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        placeholder={'00'}
                                                        onChange={handleChange}
                                                        name={`schedule.${day}_start`}
                                                        disabled={!values.schedule[`${day}_check`]}
                                                    />
                                                    <InputGroup.Text>
                                                        Закрытие
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        placeholder={'00'}
                                                        onChange={handleChange}
                                                        name={`schedule.${day}_end`}
                                                        disabled={!values.schedule[`${day}_check`]}
                                                    />
                                                </InputGroup>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <CustomMap/>
                                    </Col>
                                </Row>

                                {(props.alert_text) &&
                                <CustomAlert
                                    statusMessage={props.alert_text}
                                    header={props.alert_header}
                                    variant={props.alert_variant}
                                />}

                                <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                    disabled={!validateForm}
                                >Сформировать заявку на регистрацию заведения
                                </Button>
                            </Form>
                        </Container>
                    )
                }}
            </Formik>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        statusCode: state.PlacePage.statusCode,
        statusMessage: state.PlacePage.statusMessage,
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant,
        tags: state.PlacePage.tags,
        spec: state.PlacePage.spec,
        type: state.PlacePage.type,
        lat: state.PlacePage.lat,
        lng: state.PlacePage.lng,
    }
}

export default connect(mapStateToProps, {getResponseInfo, getTagsInfo})(CreatePlace)
