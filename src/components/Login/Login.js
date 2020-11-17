import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import * as yup from 'yup'
import {ErrorMessage, Formik} from "formik";
import Alert from "react-bootstrap/Alert";


class Login extends React.Component {

    initialValues = {
        username: '',
        password: ''
    }

    onSubmit = values => {
        this.props.userLogin(values)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        (this.props.errorCode === 401)
            ? console.log('user is not auth!!')
            : this.props.handleClose(false)
    }


    validationSchema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required')
    })

    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                validationSchema={this.validationSchema}>
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
                                {(this.props.errorCode === 401) &&
                                <Alert variant='danger'>
                                    <Alert.Heading>Такого юзера не существует.</Alert.Heading>
                                    <div>Проверьте правильность написания или
                                        <Button variant='link'
                                           onClick={() => this.props.handleActiveTab('reg')}> зарегистрируйтесь</Button>
                                    </div>
                                </Alert>}

                            </Form.Group>
                            <Button onClick={formik.handleSubmit} disabled={!formik.validateForm}>Submit</Button>
                        </Form>
                    )
                }
                }
            </Formik>
        )
    }


}

export default Login
