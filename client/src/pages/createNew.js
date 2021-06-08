
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UploadMany from "../components/UploadMany"

function CreateNew() {

    return (
        <div class="row mt-4">
            <div class="col-md-6">
                <h2>
                    Create a New Listing:
        </h2>
                <form
                    class="form new-project-form"
                    id="upload-photos"
                    action="/upload"
                    method="post"
                    enctype="multipart/form-data"
                >
                    <label for="listing-name">
                        Listing Name:
          </label>
                    <input
                        class="form-input"
                        type="text"
                        id="listing-name"
                        name="listing_name"
                    />
                    <label for="listing-desc">
                        Listing Description:
          </label>
                    <textarea
                        class="form-input"
                        id="listing-desc"
                        name="listing_desc"
                    ></textarea>
                    <br />
                    <label for="listing-category">
                        Categories:
          </label>
                    <select
                        class="form-control"
                        id="listing-category"
                        name="listing_category"
                    >
                        <option value="1">
                            Automobiles
            </option>
                        <option value="2">
                            Clothing
            </option>
                        <option value="3">
                            Farm Equipment
            </option>
                        <option value="4">
                            Furniture
            </option>
                        <option value="5">
                            Miscellaneous
            </option>
                        <option value="6">
                            Skilled Labor
            </option>
                        <option value="7">
                            Unskilled Labor
            </option>
                    </select>
                    <input
                        type="hidden"
                        id="listing-status"
                        name="listing_status"
                        value="1"
                    />
                    <label for="photos-input">
                        Browse Multiple Images to Upload
          </label>
                    <input id="photos" type="file" name="john-wayne" multiple />
                    <br />
                    <button id="listing-create" type="submit" class="btn btn-primary">
                        Create
          </button>
                </form>
            </div>
        </div>
    )
}


export default CreateNew;