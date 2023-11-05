import "./SignUpPage.scss"
import Input from "../../components/input/Input"
import { useState } from "react"

export default function () {

    const initialSignUpValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)

    const onChangeHandler = (event) => {
        const { name, value } = event.target

        setSignUpValues({
            ...signUpValues,
            [name]: value,
        })
        console.log(signUpValues);
    }

    return (
        <form className="signup__form">
            <h2>Sign Up</h2>
            <div>Create a new account</div>
            <Input
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
                value={signUpValues.username}
                onChangeHandler={onChangeHandler}
            />
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={signUpValues.email}
                onChangeHandler={onChangeHandler}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={signUpValues.password}
                onChangeHandler={onChangeHandler}
            />
            <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={signUpValues.confirmPassword}
                onChangeHandler={onChangeHandler}
            />

        </form>
    )
}