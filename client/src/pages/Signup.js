import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

function Signup() {
  // Setting our component's initial state
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState("");
  const [data, setData] = useState(null);

  const [imagePath, setImagePath] = useState({});

  const register = () => {
    API.createUser({
      name: registerName,
      username: registerUsername,
      password: registerPassword,
      picture_path: "",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setRegisteredUser(true);
      })
      .catch((err) => {
        setRegisteredUser(false);

      });
  };

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/user",
    }).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  //File Upload Alert
  ocShowAlert = (message, background = '#3089cf') => {
    let alertContainer = document.querySelector('#oc-alert-container'),
      alertEl = document.createElement('div'),
      textNode = document.createTextNode(message);
    alertEl.setAttribute('class', 'oc-alert-pop-up');
    $(alertEl).css('background', background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function () {
      $(alertEl).fadeOut('slow');
      $(alertEl).remove();
    }, 3000);
  };

  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  //File Upload Handler
  singleFileUploadHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    //let selectedFile = imagePath.imagePath;
    // If file selected
    if (selectedFile) {
      data.append('profileImage', selectedFile, selectedFile.name);

      axios.post('/api/upload/single-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      }).then((response) => {
        if (200 === response.status) {
          // If file size is larger than expected.
          if (response.data.error) {
            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
              ocShowAlert('Max size: 2MB', 'red');
            } else {
              console.log(response.data);// If not the given file type
              ocShowAlert(response.data.error, 'red');
            }
          } else {
            // Success
            let fileName = response.data;
            console.log('fileName', fileName);
            ocShowAlert('File Uploaded', '#3089cf');

            //Need to include information here about the rest of the user create here

          }
        }
      }).catch((error) => {
        // If another error
        ocShowAlert(error, 'red');
      });
    } else {
      // if file not selected throw error
      ocShowAlert('Please upload file', 'red');
    }
  };


  return (
    <div>
      {registeredUser ? (
        <Redirect to="/login" registeredUser={registeredUser} />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <h2>Sign-up</h2>
            {/* <form className="form signup-form" id="upload-profile-photos" action="/api/users" method="post"
          encType="multipart/form-data"> */}
            <label htmlFor="name-signup">name:</label>
            <input
              className="form-input"
              type="text"
              id="name-signup"
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <label htmlFor="email-signup">email:</label>
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <label htmlFor="password-signup">password:</label>
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {/* Start of Single File Upload for Profile Picture */}
            <div className="container">
              {/* For Alert box*/}
              <div id="oc-alert-container"></div>{/* Single File Upload*/}
              <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                <div className="card-header">
                  <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
                  <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 5MB )</p>
                </div>
                <div className="card-body">
                  <p className="card-text">Please upload an image for your profile</p>
                  <input type="file" onChange={(event) => setImagePath(event.target.file)} />
                  <div className="mt-5">
                    <button className="btn btn-info" onClick={singleFileUploadHandler}>Upload!</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of File Upload */}
            <br />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={register}
            >
              Sign-up
            </button>
            {/* </form> */}
            <div>
              <p>Already have an account?</p>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
            <div>
              <p>Get User</p>
              <button onClick={getUser}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Signup;
