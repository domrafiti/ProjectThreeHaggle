import React from 'react'
import Placeholder from './Placeholder.png';

const BioImg = () => {

    // Function to set a rating, leave a review, average stars, Stars = ACE
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={Placeholder} class="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Review here</p>
            </div>
        </div>

    )
}

export default BioImg
