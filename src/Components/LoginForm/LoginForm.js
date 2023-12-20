import React, { useEffect, useState } from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
const LoginForm = ({ handleSubmit }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId:
          "43577689875-d79271sekk6rlup7n5k0est2ve74hv3v.apps.googleusercontent.com",
        scope: "email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);
  const onSuccess = (res) => {
    console.log(res);
    const Email = res.profileObj.email;
    const Id = res.profileObj.googleId;
    handleSubmit({ Email, Id ,Gmail:true});
  };

  const onFailure = (res) => {
    console.log("Failed", res);
  };  
  const submitFunction = (e) => {
    e.preventDefault();
    handleSubmit({ Email, Id: password,Gmail:false });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div class="login-container">
        <h2>Login</h2>
        <form class="login-form" onSubmit={(e) => submitFunction(e)}>
          <div class="form-group">
            <label for="username">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <button type="submit">Login</button>
          </div>
          <div class="form-group">
            <GoogleLogin
              clientId="43577689875-d79271sekk6rlup7n5k0est2ve74hv3v.apps.googleusercontent.com"
              onSuccess={onSuccess}
              onFailure={onFailure}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  class="google-login-button"
                >
                  Login with Google
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
