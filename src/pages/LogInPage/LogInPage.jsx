import "./LogInPage.scss"
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

import React, { useState } from 'react';

const LogInPage = () => {

    const initialValues = {
        email: "",
        password: "",
    }

    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (event) => {
        // This is the same as doing e.target.name and e.target.value
        const { name, value } = event.target

        setValues({
            ...values,
            [name]: values,
        })
        console.log(values);
    }



    return (
        <form className="login__form">
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email}
                onChangeHandler={onChangeHandler}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChangeHandler={onChangeHandler}
            />
            <Button />
        </form>
    );
};

export default LogInPage;