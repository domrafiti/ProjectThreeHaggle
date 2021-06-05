import React from 'react'
import { Link } from "react-router-dom";

const SignupBtn = () => {
    return (
        <div>
            <Link to="/signup">
            <button className="btn btn-primary">Sign-up</button>
            </Link>
        </div>
    )
}

export default SignupBtn

