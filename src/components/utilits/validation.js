export function validate(values) {
    let errors = {name: '', text:'', type: ''}

    if (!values.name) {
        errors.name = 'The name is required'
    } else if (!values.text) {
        errors.text = 'The text is required'
    }

    return errors
}
