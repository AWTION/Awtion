import validator from 'validator';


export function passwordValidation(password) {
    // Check if the password meets the length criteria (8 to 20 characters)
    if (password.length < 8 || password.length > 15) {
        return false;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        return false;
    }

    // If all criteria are met, the password is considered valid
    return true;
}

export function usernameValidation(username) {
    if (username.length < 8 || username.length > 15) {
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
        password: passwordValidation(formData.password),
    })
}

export function signUpFormValidation(formData) {
    return ({
        username: validator.isEmpty(formData.username) && usernameValidation(),
        email: !validator.isEmail(formData.email),
        password: passwordValidation(formData.password),
        confirmPassword: verifyPassword(),
    })
}