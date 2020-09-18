import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const EditProfileInfo = () => {
    return(
        <Form>
            <Form.Group >
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    // onChange={this.handleChange}
                    // value={this.state.first_name}
                    name='first_name'
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    // onChange={this.handleChange}
                    // value={this.state.last_name}
                    name='last_name'
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    // onChange={this.handleChange}
                    // value={this.state.email}
                    name='email'
                />
            </Form.Group>


            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    // onChange={this.handleChange}
                    // value={this.state.username}
                    name='username'
                />
            </Form.Group>

            {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
            {/*    <Form.Label>Choose your gender</Form.Label>*/}
            {/*    <Form.Control as="select" onChange={this.handleChange} value={this.state.value}>*/}
            {/*        <option  value='male' name='sex'>м</option>*/}
            {/*        <option  value='female' name='sex'>ж</option>*/}
            {/*    </Form.Control>*/}
            {/*</Form.Group>*/}



            <Button
                variant="primary"
                type="submit"
                // onClick={this.handleClick}
            >
                Сохранить изменения
            </Button>
        </Form>
    )
}

export default EditProfileInfo
