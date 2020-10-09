import React from "react";
import Alert from "react-bootstrap/cjs/Alert";

const CustomAlert = ({statusMessage, header, variant}) => {
    return(
        <Alert variant={variant}>
            <Alert.Heading>{header}</Alert.Heading>
            <p>{statusMessage}</p>
        </Alert>
        )
}

export default CustomAlert
