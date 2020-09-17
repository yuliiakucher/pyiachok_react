import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import * as axios from 'axios'
import {connect} from "react-redux";


class Registration extends React.Component{

    state = {
        first_name: '',
        last_name:'',
        email: '',
        sex:'',
        username:'',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.handleClose(false)
        const data = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            email: this.state.email,
            sex:this.state.sex,
            username:this.state.username,
            password: this.state.password
        }

        console.log(data)




        axios.post(
            'http://localhost:8000/user/create/',
            {...data},
            // config
        ).then(console.log).catch(console.log);
    }


    render(){
        return(
            <Form>
                <Form.Group >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        onChange={this.handleChange}
                        value={this.state.first_name}
                        name='first_name'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        onChange={this.handleChange}
                        value={this.state.last_name}
                        name='last_name'
                    />
                </Form.Group>


                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='username'
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Choose your gender</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange} value={this.state.value}>
                        <option  value='male' name='sex'>м</option>
                        <option  value='female' name='sex'>ж</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="regFormBasicPassword">
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


export default Registration
