import "./SignUpPage.scss"
import Input from "../../components/input/Input"
import { useState } from "react"
import Button from "../../components/Button/Button"
import { signUpFormValidation } from "../../utils/validator"


export default function () {

    const initialSignUpValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const errorState = {
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    }

    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)
    const [error, setError] = useState(errorState)

    const onChangeHandler = (event) => {
        const { name, value } = event.target

        setSignUpValues({
            ...signUpValues,
            [name]: value,
        })
        console.log(signUpValues);

        setError({
            ...error,
            [name]: false,
        })
    }

    const onSumbitHandler = (e) => {
        e.preventDefault();
        signUpFormValidation();
    }

    return (
        <form className="signup__form" onSubmit={onSumbitHandler}>
            <h2>Sign Up</h2>
            <div>Create a new account</div>
            <Input
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
                value={signUpValues.username}
                onChangeHandler={onChangeHandler}
                error={error.username}
                errorMesage={"Incorrect Username"}
            />
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={signUpValues.email}
                onChangeHandler={onChangeHandler}
                error={error.email}
                errorMesage={"Incorrect email"}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={signUpValues.password}
                onChangeHandler={onChangeHandler}
                error={error.password}
                errorMesage={<ul>Password requires :<li>1 special character</li><li>1 upper case</li>
                    <li>8 to 10 characters long</li></ul>}
            />
            <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={signUpValues.confirmPassword}
                onChangeHandler={onChangeHandler}
                error={error.confirmPassword}
                errorMesage={"Passwords don't match"}
            />
            <div>
                <Input
                    type="checkbox"
                />
                <div>By creating an account you have to agree with our terms and conditions.</div>
            </div>

            <Button
                type="Submit"
                label="Login" />
        </form>
    )
}