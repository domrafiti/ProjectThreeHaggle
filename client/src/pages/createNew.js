import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import API from "../utils/API";
import { LexModelBuildingService } from "aws-sdk";

function CreateNew() {
  const [formObject, setFormObject] = useState({});
  const [imagePath, setImagePath] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    const imagePath = event.target.files;
    setFormObject({ ...formObject, [name]: value });
    setImagePath({ imagePath });
    console.log("image path", imagePath);
    console.log(formObject);
  }

  // ShowAlert Function
  function ocShowAlert(message, background = "#3089cf") {
    let alertContainer = document.querySelector("#oc-alert-container"),
      alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    alertEl.setAttribute("class", "oc-alert-pop-up");
    $(alertEl).css("background", background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function () {
      $(alertEl).fadeOut("slow");
      $(alertEl).remove();
    }, 30000);
  }

  function multipleFileUploadHandler(event) {
    event.preventDefault();
    const data = new FormData();
    console.log(data);
    let selectedFiles = imagePath.imagePath;
    console.log("selected files", selectedFiles);
    // If file selected
    if (selectedFiles) {
      console.log(selectedFiles.length);
      for (let i = 0; i < selectedFiles.length; i++) {
        data.append("galleryImage", selectedFiles[i], selectedFiles[i].name);
        console.log("data", data);
      }
      axios
        .post("/api/upload/multiple-file-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then((response) => {
          console.log("response", response);
          console.log("res", response.status);
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                ocShowAlert("Max size: 5MB", "red");
              } else if ("LIMIT_UNEXPECTED_FILE" === response.data.error.code) {
                ocShowAlert("Max 4 images allowed", "red");
              } else {
                // If not the given ile type
                ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let fileName = response.data.locationArray;
              console.log("fileName", fileName);
              ocShowAlert("File Uploaded", "#3089cf");
              //look into wrapping in set timeout
              API.saveListing({
                title: formObject.listing_name,
                description: formObject.listing_desc,
                date_created: Date.now(),
                category: formObject.listing_category,
                status: "Active",
                user: localStorage.getItem("userId"),
                image_path: fileName,
              }).then((res) => {
                API.updateUser({
                  user: localStorage.getItem("userId"),
                  listing: res.data._id
                }).then((res) => {
                  window.location.replace('/profile')
                })
                  .catch((err) => {
                    console.log(err);
                  });
              })
            }
          }
        })
        .catch((error) => {
          // If another error
          console.log("error catch", error);
          ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      ocShowAlert("Please upload file", "red");
    }
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Create a New Listing:</h2>
          <form className="form new-project-form">
            <div className="form-group">
              <label htmlFor="listing-name">Listing Name:</label>
              <input
                onChange={handleInputChange}
                className="form-input"
                type="text"
                id="listing-name"
                name="listing_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="listing-desc">Listing Description:</label>
              <textarea
                onChange={handleInputChange}
                className="form-input"
                type="text"
                id="listing-desc"
                name="listing_desc"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="listing-category">Categories:</label>
              <select
                onChange={handleInputChange}
                className="form-control"
                type="text"
                id="listing-category"
                name="listing_category"
                value="Automobiles"
              >
                <option value="Automobiles">Automobiles</option>
                <option value="Clothing">Clothing</option>
                <option value="Farm Equipment">Farm Equipment</option>
                <option value="Furniture">Furniture</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Skilled Labor">Skilled Labor</option>
                <option value="Unskilled Labor">Unskilled Labor</option>
              </select>
              <input
                type="hidden"
                id="listing-status"
                name="listing_status"
                value="1"
              />
            </div>
            <div className="form-group">
              <div id="oc-alert-container"></div>
              {/* For Alert box*/}
              {/* Multiple File Upload */}
              <div
                className="card border-light mb-3"
                style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
              >
                <div className="card-header">
                  <h3 style={{ color: "#555", marginLeft: "12px" }}>
                    Upload Muliple Images
                  </h3>
                  <p className="text-muted" style={{ marginLeft: "12px" }}>
                    Upload Size: 400px x 400px ( Max 5MB )
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Please upload the Gallery Images for your gallery
                  </p>
                  <input type="file" multiple onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button
                id="listing-create"
                type="submit"
                className="btn btn-info mt-4 mb-4"
                onClick={multipleFileUploadHandler}
              >
                Create Listing
              </button>
            </div>
            {/* <button id="listing-create" type="submit" className="btn btn-primary">
                            Create
                        </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
