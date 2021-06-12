import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const FavStar = () => {
    const [favorite, setFav] = useState(null);
    const [hover, setHover] = useState(null);

    // const favorite = 
    return (
        <div>
            <label>
                <input id="star-input"
                    type="radio"
                    name="rating"
                    // value={}
                    onClick={() => setFav()}
                />
                <FaStar
                    className="star"
                    // color={ratingValue <= (hover || ) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover()}
                    onMouseLeave={() => setHover(null)} />

            </label>
        </div>
    )
}

export default FavStar
