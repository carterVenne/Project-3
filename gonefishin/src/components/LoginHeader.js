import React from "react";
import '../styles/main.css';

function LoginHeader () {
    return (
    <div className="h-auto bg-gray flex flex-col space-y-10 object-center items-center">
        <div className="bg-gray w-96 shadow-xl rounded p-5 pb-5">
            <h1 className="text-3xl font-medium text-center">Welcome</h1>
            <p className="text-sm text-center">If you already have an account please log in, otherwise take the time to create one below</p>
        </div>
    </div>
    )
}

export default LoginHeader;