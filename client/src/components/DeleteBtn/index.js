import React from 'react'

const DeleteBtn = (props) => {
// add delete function here


    return (
        <div>

            <button
                className="btn btn-danger"
                id="delete-btn"
                {...props}
            >
                DELETE
                
            </button>
        </div>
    )
}

export default DeleteBtn
