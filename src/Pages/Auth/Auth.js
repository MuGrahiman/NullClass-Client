import React from "react";
import "./Auth.css";
import GoogleLogin from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../Actions/currentUser";
import { Link } from "react-router-dom";
const Auth = ({ User, setAuthBtn, setCreateEditChannelBtn }) => {
  const dispatch = useDispatch();

  const onLogOutSuccess = (res) => {
  
    dispatch(setCurrentUser(null));
    alert("successfully logout");
  };

  const onFailure = (res) => {
    console.log("Failed", res);
  };
  return (
    <div className="Auth_Container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_Container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {User?.result?.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </p>

        <div className="btns_Auth">
          {User?.result?.name ? (
            <>
              <Link to={`/channel/${User?.result._id}`}
                className="btn_Auth"
              >your Channel</Link>
            </>
          ) : (
            <>
               <input
                onClick={() => setCreateEditChannelBtn(true)}
                type="submit"
                className="btn_Auth"
                value="Create your Channel"
              />
            </>
          )}


          <div>
            <GoogleLogin
              clientId="43577689875-d79271sekk6rlup7n5k0est2ve74hv3v.apps.googleusercontent.com"
              onSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div className="btn_Auth" onClick={renderProps.onClick}>
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
