import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import {connect} from "react-redux";
import userLogin from "../../redux/log-action";


class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.userLogin(this.state)
        this.props.handleClose(false)
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='username'
                    />
                </Form.Group>

                <Form.Group controlId="loginFormBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleClick}
                >
                    Submit
                </Button>
            </Form>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        userLogin: (user) => dispatch(userLogin(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)
