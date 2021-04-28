import React from 'react';
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from '../../components/emialinput/Emailinput';
import Button from "../../components/button/Button";

const Signin = () => {
    return (
        <div>
            <Emailinput />
            <Passwordinput />
            <Button text="SIGNIN" />
        </div>
    );
};

export default Signin;