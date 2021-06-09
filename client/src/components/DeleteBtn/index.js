import React from 'react'

const DeleteBtn = ({deleteListing, id}) => {
// add delete function here


    return (
        <div>

            <button
                className="btn btn-danger"
                id="delete-btn"
            onClick = {()=>deleteListing(id)}
            >
                DELETE
                
            </button>
        </div>
    )
}

export default DeleteBtn
