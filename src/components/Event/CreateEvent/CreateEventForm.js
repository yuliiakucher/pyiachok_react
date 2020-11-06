import React from "react";
import * as yup from 'yup'
import {Formik} from 'formik';
import {connect} from "react-redux";
import {createEvent} from "../../../redux/event-reducer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";


const CreateEventForm = (props) => {
    const initialValues = {
        date: '',
        purpose: '',
        sex: '',
        number_of_people: '',
        payer: '',
        expenditures: ''
    }

    const onSubmit = values => {
        console.log(values)
        props.createEvent(props.id, values)
    }

    const validationSchema = yup.object({
        date: yup.string().required('Укажите дату'),
        purpose: yup.string().required('Укажите цель'),
        sex: yup.string().required('Укажите пол участников'),
        number_of_people: yup.string().matches(/^[0-9]+$/, 'Введите цифру').required('Укажите количество участников'),
        payer: yup.string().required('Укажите кто оплачивает'),
        expenditures: yup.string().required('Укажите приблизительные расходы')
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
                    <Form>
                        <Form.Group>
                            <Form.Label>Дата</Form.Label>
                            <Form.Control
                                name='date'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.date && !errors.date}
                            />
                            {touched.date && !errors.date ?
                                <Form.Text>{errors.date}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Цель</Form.Label>
                            <Form.Control
                                name='purpose'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.purpose && !errors.purpose}
                            />
                            {touched.purpose && !errors.purpose ?
                                <Form.Text>{errors.purpose}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пол участников</Form.Label>
                            <Form.Control
                                name='sex'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.sex && !errors.sex}
                            />
                            {touched.sex && !errors.sex ?
                                <Form.Text>{errors.sex}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Количество людей</Form.Label>
                            <Form.Control
                                name='number_of_people'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.number_of_people && !errors.number_of_people}
                            />
                            {touched.number_of_people && !errors.number_of_people ?
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
                            {touched.payer && !errors.payer ?
                                <Form.Text>{errors.payer}</Form.Text> : null}

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Приблизительные расходы</Form.Label>
                            <Form.Control
                                name='expenditures'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.expenditures && !errors.expenditures}
                            />
                            {touched.expenditures && !errors.expenditures ?
                                <Form.Text>{errors.expenditures}</Form.Text> : null}
                        </Form.Group>


                        <Button onClick={handleSubmit} disabled={!validateForm} variant='primary'>Submit</Button>

                    </Form>
                )
            }}
        </Formik>
    )
}

export default connect(null, {createEvent})(CreateEventForm)
