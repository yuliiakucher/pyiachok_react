import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import * as yup from 'yup'
import {ErrorMessage, Formik} from "formik";
import Alert from "react-bootstrap/Alert";
import {connect} from "react-redux";
import {handleActiveTab, handleClose, handleShow} from "../../redux/modal-reducer";
import {userLogin} from "../../redux/login-reducer";
import {setReloginUser} from "../../redux/reauth-reducer";
import {Accordion} from "react-bootstrap";
import ResetPassword from "./ResetPassword";


const Login = (props) => {


    const initialValues = {
        username: '',
        password: '',
    }

    const onSubmit = values => {
        console.log(values)
        props.userLogin(values)
    }


    const validationSchema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required'),
    })

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {formik => {
                    return (
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    name='username'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isValid={formik.touched.username && !formik.errors.username}
                                />
                                <ErrorMessage name='username' component={Form.Text}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type='password'
                                    isValid={formik.touched.password && !formik.errors.password}/>
                                {formik.touched.password && formik.errors.password ?
                                    <Form.Text>{formik.errors.password} </Form.Text> : null}
                            </Form.Group>


                            <Form.Group>
                                {(props.errorCode === 401) &&
                                <Alert variant='danger'>
                                    <Alert.Heading>Такого юзера не существует.</Alert.Heading>
                                    <div>Проверьте правильность написания или
                                        <Button variant='link'
                                                onClick={() => props.handleActiveTab('reg')}> зарегистрируйтесь</Button>
                                    </div>
                                </Alert>}
                            </Form.Group>
                            <Button block onClick={formik.handleSubmit} disabled={!formik.validateForm}>Submit</Button>
                        </Form>
                    )
                }}

            </Formik>
            <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Forgot your password? Click here!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <ResetPassword/>
                </Accordion.Collapse>
            </Accordion>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        errorCode: state.LoginPage.statusCode
    }
}

export default connect(mapStateToProps,
    {handleClose, handleShow, userLogin, handleActiveTab, setReloginUser})(Login)
