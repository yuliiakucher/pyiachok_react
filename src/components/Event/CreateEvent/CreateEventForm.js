import React from "react";
import * as yup from 'yup'
import {Formik} from 'formik';
import {connect} from "react-redux";
import {createEvent} from "../../../redux/event-reducer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";
import CustomAlert from "../../Alerts/CustomAlert";


const CreateEventForm = (props) => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    console.log(selectedDate.toISOString())
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const initialValues = {
        date: '',
        purpose: '',
        sex: 'a',
        number_of_people: '',
        payer: '',
        expenditures: ''
    }

    const onSubmit = values => {
        values.date = selectedDate.toISOString()
        console.log(values)
        props.createEvent(props.id, values)
    }

    const validationSchema = yup.object({
        purpose: yup.string().required('Укажите цель'),
        sex: yup.string().required('Укажите пол участников'),
        number_of_people: yup.string().matches(/^[0-9]+$/, 'Введите цифру').required('Укажите количество участников'),
        payer: yup.string().required('Укажите кто оплачивает'),
        expenditures: yup.string().matches(/^[0-9]+$/, 'Введите цифру').required('Укажите приблизительные расходы')
    })


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(
                {
                  handleChange,
                  handleBlur,
                  handleSubmit, validateForm,
                  touched, errors
              }) => {
                return (
                    <Container >
                        <Form >
                            <Row className='d-flex justify-content-center'>
                                <Col lg={4}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify="space-around">
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                label="Date picker dialog"
                                                format="MM/dd/yyyy"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                            <KeyboardTimePicker
                                                margin="normal"
                                                id="time-picker"
                                                label="Time picker"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change time',
                                                }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                    <Form.Group>
                                        <Form.Label>Цель</Form.Label>
                                        <Form.Control
                                            name='purpose'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.purpose && !errors.purpose}
                                        />
                                        {touched.purpose && !!errors.purpose ?
                                            <Form.Text>{errors.purpose}</Form.Text> : null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Пол участников</Form.Label>
                                        <Form.Control as="select" onChange={handleChange} name='sex'>
                                            <option value='a'>все</option>
                                            <option value='m'>только мужчины</option>
                                            <option value='f'>только женщины</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Количество людей</Form.Label>
                                        <Form.Control
                                            name='number_of_people'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.number_of_people && !errors.number_of_people}
                                        />
                                        {touched.number_of_people && !!errors.number_of_people ?
                                            <Form.Text>{errors.number_of_people}</Form.Text> : null}

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Кто оплачивает</Form.Label>
                                        <Form.Control
                                            name='payer'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.payer && !errors.payer}
                                        />
                                        {touched.payer && !!errors.payer ?
                                            <Form.Text>{errors.payer}</Form.Text> : null}

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Приблизительные расходы (в грн)</Form.Label>
                                        <Form.Control
                                            name='expenditures'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.expenditures && !errors.expenditures}
                                        />
                                        {touched.expenditures && !!errors.expenditures ?
                                            <Form.Text>{errors.expenditures}</Form.Text> : null}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                {props.alert_text &&
                                <CustomAlert
                                    header={props.alert_header}
                                    statusMessage={props.alert_text}
                                    variant={props.alert_variant}/>
                                }

                            </Row>

                            <Row className='d-flex justify-content-center'>
                                <Button onClick={handleSubmit} disabled={!validateForm} variant='info'>Submit</Button>

                            </Row>

                        </Form>
                    </Container>
                )
            }}
        </Formik>
    )
}

let mapStateToProps = (state) => {
    return{
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant,
    }
}

export default connect(mapStateToProps, {createEvent})(CreateEventForm)
