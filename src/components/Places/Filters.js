import React, {useEffect, useState} from "react";
import {ListGroup, Form, Button} from "react-bootstrap";

const Filters = ({getTagsInfo, spec, tags, type}) => {
    useEffect(getTagsInfo, [])

    const [selected_type, handleType] = useState('Bar')

    const handleChange = (event) => {
        handleType(event.target.value)
    }

    const handleClick = () => {
        console.log(selected_type)
    }

    return (
        <ListGroup>
            <Form>
                <ListGroup.Item>
                    <h6>Restaurant Type</h6>
                    <Form.Control as='select' onChange={handleChange}>
                        {type.map(type => (
                            <option key={type.id} name={selected_type}>{type.type_name}</option>
                        ))}
                    </Form.Control>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6>Restaurant Tags</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6>Restaurant Specifities</h6>
                </ListGroup.Item>
                <Button onClick={handleClick}>Filter!</Button>
            </Form>
        </ListGroup>
    )
}

export default Filters
