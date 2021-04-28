import React from 'react';
import Nameinput from "../../components/nameinput/Nameinput";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from '../../components/emialinput/Emailinput';
import Button from "../../components/button/Button";

const Signup = () => {
    return (
        <div>
            <Nameinput />
            <Emailinput />
            <Passwordinput />
            <Button text="SIGNUP" />
        </div>
    );
};

export default Signup;