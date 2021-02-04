import React, {useEffect, useState} from 'react';

const useForm = (submit, validate) => {

    const [values, setValues] = useState({type: '1', text:'', name:''})
    const [errors, setErrors] = useState({type: '', text:'', name:''})
    const [isSubmitting, setSubmitting] = useState(false)

    const handleChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(()=> {
        if (Object.keys(errors) === 0 && isSubmitting){
            submit()
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
