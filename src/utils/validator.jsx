import validator from 'validator';


export function passwordValidation(password) {
    if (password.length < 8 || password.length > 15) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        return false;
    }
    return true;
}


export function verifyPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        return false
    }
    return true;
}


export function loginFormValidation(formData) {
    return ({
        email: !validator.isEmail(formData.email),
        password: !passwordValidation(formData.password),
    })
}

export function signUpFormValidation(formData) {
    return ({
        username: validator.isEmpty(formData.username),
        email: !validator.isEmail(formData.email),
        password: !passwordValidation(formData.password),
        confirmPassword: verifyPassword(formData.password, formData.confirmPassword),
        termsAndConditions: !formData.termsAndConditions
    })
}