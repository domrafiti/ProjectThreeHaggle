import React, { useState } from "react";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

export function EditListing() {
    // Setting our component's initial state
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const update = (event) => {


        // API.verifyUser({
        //     username: loginUsername,
        //     password: loginPassword,
        //     withCredentials: true,
        // })
        //     .then((res) => {
        //         if (res.data.token) {
        //             localStorage.setItem("token", res.data.token);
        //             localStorage.setItem("userId", res.data.userInfo.$__._id);
        //             localStorage.setItem("expiresAt", res.data.expiresAt);
        //             setLoggedIn(true);
        //             window.location.replace("/profile");
        //         }
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };


    return (
        <div className="container container-fluid ">
            <div className="row">
                <div className="col-md-6">
                    <h2>Edit Listing</h2>

                    <form className="form new-project-form">
                        <div className="form-group">
                            <label htmlFor="email-login">Listing Title</label>
                            <input
                                className="form-input"
                                type="text"
                                id=""
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-login">listing Description</label>
                            <input
                                className="form-input"
                                type="password"
                                id=""
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" onClick={update}>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditListing;
