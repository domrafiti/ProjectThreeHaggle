import React from 'react'
import SignupBtn from '../SignupBtn'
import './style.css'
const Welcome = () => {
    return (
        <div className="col-6">
            <div className= "welcome">
            <h1><strong>Welcome to Haggle!</strong> </h1>
            <h5> Trade what you have to get what you want. </h5>
            <SignupBtn />
            
            </div>
        </div>
    )
}

export default Welcome
