const validateRegisterInput = (emailId, name) => {
    const errors = {}
    if (emailId.trim() === '') {
        errors.emailId = 'Please provide a Email address'
    } else {
        const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if(!emailId.lowercase().match(regEx)) {
            errors.emailId = 'Please provide a valid Email address'
        }
    }
    if (name.trim() === '') {
        errors.name = 'Please provide a Name'
    }
    if (name.length < 3) {
        errors.name = 'Name must be atleast 3 characters long'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

export default validateRegisterInput