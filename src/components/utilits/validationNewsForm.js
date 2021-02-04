export function validate(values) {
    let errors = {}

    if (!values.name) {
        errors.name = 'The name is required'
    } else if (!values.text) {
        errors.text = 'The text is required'
    }

    return errors
}
