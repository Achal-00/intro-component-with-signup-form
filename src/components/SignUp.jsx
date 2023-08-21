import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function formHandler(e) {
    e.preventDefault();
    if (data.fname === "") {
      document
        .querySelectorAll(".first-name .error-holder, .first-name p")
        .forEach((x) => {
          x.style.display = "grid";
        });
      document.querySelector(".first-name input").style.border =
        "thin solid var(--red)";
    } else {
      document
        .querySelectorAll(".first-name .error-holder, .first-name p")
        .forEach((x) => {
          x.style.display = "none";
        });
      document.querySelector(".first-name input").style.border =
        "thin solid var(--green)";
    }
    if (data.lname === "") {
      document
        .querySelectorAll(".last-name .error-holder, .last-name p")
        .forEach((x) => {
          x.style.display = "grid";
        });
      document.querySelector(".last-name input").style.border =
        "thin solid var(--red)";
    } else {
      document
        .querySelectorAll(".last-name .error-holder, .last-name p")
        .forEach((x) => {
          x.style.display = "none";
        });
      document.querySelector(".last-name input").style.border =
        "thin solid var(--green)";
    }
    if (data.email === "" || !data.email.match(validRegex)) {
      document
        .querySelectorAll(".e-mail .error-holder, .e-mail p")
        .forEach((x) => {
          x.style.display = "grid";
        });
      document.querySelector(".e-mail input").style.border =
        "thin solid var(--red)";
    } else {
      document
        .querySelectorAll(".e-mail .error-holder, .e-mail p")
        .forEach((x) => {
          x.style.display = "none";
        });
      document.querySelector(".e-mail input").style.border =
        "thin solid var(--green)";
    }
    if (data.password === "") {
      document
        .querySelectorAll(".password .error-holder, .password p")
        .forEach((x) => {
          x.style.display = "grid";
        });
      document.querySelector(".password input").style.border =
        "thin solid var(--red)";
    } else {
      document
        .querySelectorAll(".password .error-holder, .password p")
        .forEach((x) => {
          x.style.display = "none";
        });
      document.querySelector(".password input").style.border =
        "thin solid var(--green)";
    }
    if (
      data.fname !== "" &&
      data.lname !== "" &&
      data.email !== "" &&
      data.password !== "" &&
      data.email.match(validRegex)
    ) {
      document.querySelector(".overlay").style.display = "flex";
    }
  }

  return (
    <div className="signup">
      <div className="trial-header">
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <div className="signup-form">
        <div className="overlay">
          <div className="success-holder">
            <img src="images/icon-thank-you.svg" alt="thank you" />
          </div>
          <h4>Trial Activated!</h4>
        </div>
        <form>
          <div className="common first-name">
            <input
              type="text"
              placeholder="First Name"
              className="fname"
              onChange={(e) => setData({ ...data, fname: e.target.value })}
            />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>First Name cannot be empty</p>
          </div>
          <div className="common last-name">
            <input
              type="text"
              placeholder="Last Name"
              className="lname"
              onChange={(e) => setData({ ...data, lname: e.target.value })}
            />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Last Name cannot be empty</p>
          </div>
          <div className="common e-mail">
            <input
              type="email"
              placeholder="Email Address"
              className="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Looks like this is not an email</p>
          </div>
          <div className="common password">
            <input
              type="password"
              placeholder="Password"
              className="pass"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <div className="error-holder">
              <img src="images/icon-error.svg" alt="error" />
            </div>
            <p>Password cannot be empty</p>
          </div>
          <button onClick={formHandler}>claim your free trial</button>
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
