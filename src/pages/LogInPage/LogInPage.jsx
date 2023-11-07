import "./LogInPage.scss"
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";
import React, { useState } from 'react';
import { loginFormValidation , passwordValidation} from "../../utils/validator";


const LogInPage = () => {

    const initialValues = {
        email: "",
        password: "",
    }

    const errorState = {
        email : false,
        password :false
    }

    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(errorState)

    const onChangeHandler = (event) => {
        const { name, value } = event.target

        setValues({
            ...values,
            [name]: value,
        })
         
        setError({
            ...error,
            [name] : false
        })
    }

    const onSumbitHandler = (event) =>{
      event.preventDefault();
      const errorMessage = loginFormValidation(values)
      setError({
        email : errorMessage.email,
        password : !passwordValidation(values.password)
      })
    }

    return (
        <form className="login__form" onSubmit={(event) => onSumbitHandler(event)}>
            <Input
                label="Email"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChangeHandler={onChangeHandler}
                error={error.email}
                errorMesage={"Invalid Email"}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChangeHandler={onChangeHandler}
                error={error.password}
                errorMesage={<ul>Password requires :<li>1 special character</li><li>1 upper case</li>
       <li>8 to 10 characters long</li></ul> }
            />
            <Button type={"Submit"} />
        </form>
    );
};

export default LogInPage;