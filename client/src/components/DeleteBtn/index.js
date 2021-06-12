import React, { useState } from 'react'
import { Link, useParams, Redirect } from "react-router-dom";
import { FaTrash, FaUtensilSpoon } from "react-icons/fa"
import API from "../../utils/API"

const DeleteBtn = ({ deleteListing, id }) => {
    // add delete function here




    return (
        <div>
            <button
                className="btn btn-danger"
                id="delete-btn"
                onClick={() => deleteListing(id)}
            >
                <FaTrash />

            </button >
        </div>
    )
}

export default DeleteBtn
