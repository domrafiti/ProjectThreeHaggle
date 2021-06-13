import React from "react";
import API from "../../utils/API";

function Message() {
  function handleSubmit(e) {
    console.log("hello");
    e.preventDefault();
    API.haggle().then((response) => {
      if (response.data.status === "success") {
        console.log("Message Sent.");
      } else if (response.data.status === "fail") {
        console.log("Message failed to send.");
      }
    });
  }

  return (
    <div className="form-group mx-1 show-it">
      <form className="form">
        <input
          type="hidden"
          value="brice.huisken@gmail.com"
          name="em_to_email"
        />
        <input type="hidden" value="Brice" name="em_to_name" />
        <input type="hidden" value="{{logged_user}}" name="em_from_id" />
        <input type="hidden" value="Keith" name="em_from_name" />
        <input type="hidden" value="{{title}}" name="em_title" />
        <input type="hidden" value="{{description}}" name="em_desc" />
        <input type="hidden" value="{{category.name}}" name="em_cat" />
        <input type="hidden" value="{{id}}" name="em_listing_id" />
        <button
          id="listing-interested-btn"
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          I am Interested!
        </button>
      </form>
    </div>
  );
}

export default Message;
