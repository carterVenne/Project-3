import React from "react";

import LoginForm from "./LoginForm";
import '../styles/main.css';

function LoginCard() {
    return <div className="h-auto bg-white flex flex-col space-y-10 object-left items-left">
        <LoginForm/>
    </div>
}

export default LoginCard;