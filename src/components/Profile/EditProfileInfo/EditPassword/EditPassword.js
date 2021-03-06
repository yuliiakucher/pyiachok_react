import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from "yup";
import CustomAlert from "../../../Alerts/CustomAlert";

const EditPassword = (props) => {
    let initialValues = {
        old_password: '',
        new_password: '',
    }


    const onSubmit = values => {
        props.editPassword(values)
    }


    const validationSchema = yup.object({
        old_password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Пароль должен быть от 6 символов, содержать заглавные буквы и цифры')
            .required('Введите ваш пароль'),
        new_password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Пароль должен быть от 6 символов, содержать заглавные буквы и цифры')
            .required('Введите ваш пароль')
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formik => {
                return (
                    <Form className='m-3'>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">Старый пароль</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="password"
                                    placeholder="Введите старый пароль"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='old_password'
                                    isValid={formik.touched.old_password && !formik.errors.old_password}
                                />
                                {formik.touched.old_password && formik.errors.old_password ?
                                    <Form.Text>{formik.errors.old_password} </Form.Text> : null}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="3">Новый пароль</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="password"
                                    placeholder="Введите новый пароль"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='new_password'
                                    isValid={formik.touched.new_password && !formik.errors.new_password}
                                />
                                {formik.touched.new_password && formik.errors.new_password ?
                                    <Form.Text>{formik.errors.new_password} </Form.Text> : null}
                            </Col>
                        </Form.Group>

                        {(props.alert_text) &&
                        <CustomAlert
                            statusMessage={props.alert_text}
                            header={props.alert_header}
                            variant={props.alert_variant}
                        />}

                        <Button
                            variant="outline-primary"
                            onClick={formik.handleSubmit}
                            disabled={!formik.validateForm}
                        >Сохранить изменения
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default EditPassword
