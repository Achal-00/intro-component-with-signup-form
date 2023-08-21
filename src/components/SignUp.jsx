import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="trial-header">
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <div className="signup-form">
        <form>
          <div className="common first-name">
            <input type="text" placeholder="First Name" className="fname" />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>First Name cannot be empty</p>
          </div>
          <div className="common last-name">
            <input type="text" placeholder="Last Name" className="lname" />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Last Name cannot be empty</p>
          </div>
          <div className="common e-mail">
            <input type="email" placeholder="Email Address" className="email" />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Looks like this is not an email</p>
          </div>
          <div className="common password">
            <input type="password" placeholder="Password" className="pass" />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Password cannot be empty</p>
          </div>
          <button>claim your free trial</button>
        </form>
        <div className="footer">
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
