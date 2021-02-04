import React, {useEffect, useState} from 'react';

const useForm = (submit, validate) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    const handleChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(()=> {
        if (Object.keys(errors).length === 0 && isSubmitting){
            submit()
            setValues({})
        }
    }, [errors])

    const handleSubmit = () => {
        setErrors(validate(values))
        setSubmitting(true)
    }

    return {
        handleChange, handleSubmit, values, errors
    };
};

export default useForm;
