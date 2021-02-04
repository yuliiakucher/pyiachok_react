import React, {useState} from "react";
import {ErrorMessage, Formik} from "formik";
import Form from 'react-bootstrap/Form'
import * as yup from "yup";
import * as axios from 'axios'
import Button from "react-bootstrap/cjs/Button";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../../redux/login-reducer";
import {Container} from "react-bootstrap";
import CustomAlert from "../../Alerts/CustomAlert";

const queryString = require('query-string');


const ResetPasswordPage = (props) => {

    const dispatch = useDispatch()
    const message = useSelector(store => store.AlertPage.text)
    const header = useSelector(store => store.AlertPage.header)
    const variant = useSelector(store => store.AlertPage.variant)
    const [alert, setAlert] = useState(false)

    const initialValues = {
        password: '',
        password_confirm: ''
    }

    const password_arr = [{
        name: 'password',
        label: 'Please, create new password'
    }, {
        name: 'password_confirm',
        label: 'Please, confirm your new password'
    }]

    const onSubmit = values => {
        if (values.password !== values.password_confirm) {
            setAlert(true)
        } else setAlert(false)
        const parsed = queryString.parse(props.location.search);
        const data = {'token': parsed.token, 'password': values.password}
        alert && dispatch(resetPassword(data))
    }

    const validationSchema = yup.object({
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required'),
        password_confirm: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required'),
    })

    return (
        <Container className='d-flex flex-column align-items-center mt-5'>
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
                        touched, errors, values
                    }) => {
                    return (
                        <Form>
                            {password_arr.map(entity => (
                                <Form.Group>
                                    <Form.Label>{entity.label}</Form.Label>
                                    <Form.Control
                                        type='password'
                                        name={entity.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched[entity.name] && !errors[entity.name]}
                                    />
                                    <ErrorMessage name={entity.name} component={Form.Text}/>
                                </Form.Group>
                            ))}
                            {alert && <div>The passwords must be the same</div>}
                            {variant && <CustomAlert statusMessage={message} variant={variant} header={header}/>}
                            <Button type='submit' onClick={handleSubmit} disabled={!validateForm}>Submit</Button>
                        </Form>
                    )
                }}
            </Formik>
        </Container>

    );
}


export default withRouter(ResetPasswordPage)
