import React from 'react';
import {Form} from "react-bootstrap";

const CustomFileInput = ({label, file, setData, file_label}) => {

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.File custom>
                <Form.File.Input isValid={!!file} onChange={(e)=>(setData(e.currentTarget.files[0]))}/>
                <Form.File.Label data-browse="Search">
                    {file_label}
                </Form.File.Label>
                {!!file&&
                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>}
            </Form.File>
        </Form.Group>
    );
};

export default CustomFileInput;
