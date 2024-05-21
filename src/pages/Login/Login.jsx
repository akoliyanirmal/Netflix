import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [singState, setSingState] = useState("Sing In");

  return (
    <>
      <div className="login">
        <img className="login-logo" src={logo} alt="" />
        <div className="login-form">
          <h1>{singState}</h1>
          <form>
            {singState === "Sing Up" ? (
              <input type="text" placeholder="Your name" />
            ) : (
              <></>
            )}

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>{singState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" placeholder="Checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {singState === "Sing In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSingState("Sing Up");
                  }}
                >
                  Sing Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{" "}
                <span
                  onClick={() => {
                    setSingState("Sing In");
                  }}
                >
                  Sing In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
