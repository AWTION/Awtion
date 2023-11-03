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

    return (
        <form className="login__form">
            <Input
                label="Email"
                type="email"
                value={values.email}
            />
            <Input
                label="Password"
                type="password"
                value={values.password} />
            <Button />
        </form>
    );
};

export default LogInPage;