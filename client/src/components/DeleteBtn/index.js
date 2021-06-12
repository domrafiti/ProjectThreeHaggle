import React from 'react'
import {FaTrash} from "react-icons/fa"

const DeleteBtn = ({deleteListing, id}) => {
// add delete function here


    return (
        <div>

            <button
                className="btn btn-danger"
                id="delete-btn"
            onClick = {()=>deleteListing(id)}
            >
                <FaTrash />
                
            </button>
        </div>
    )
}

export default DeleteBtn
