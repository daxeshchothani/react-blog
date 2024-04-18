import React from "react";

const Contactform = () => {
  return (
    <>
      <div>
        <div>
            <h5>Want to get in touch? Fill out the form below to send us a message and we will get back to you as soon as possible!</h5>
        </div>
        <form>
          <div>
            <div>
              <label for="Name">Name:</label>
              <input type="text" placeholder="Name" />
            </div>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div>
            <label for="exampleInputPassword1">Phone Number</label>
            <input type="text" placeholder="" />
          </div>
          <div>
            <label class="form-label" for="form4Example3">
              Message{" "}
            </label>
            <textarea id="form4Example3"></textarea>
          </div>
          <div>
            <button type="submit">Send </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactform;
