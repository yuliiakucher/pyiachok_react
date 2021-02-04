export function validate(values) {
    let errors = {}

    if (!values.search) {
        errors.name = 'The name is required'
    }

    return errors
}
