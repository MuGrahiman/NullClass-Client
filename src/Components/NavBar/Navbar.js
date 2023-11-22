import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import SearchBar from "../SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/auth";
import Auth from "../../Pages/Auth/Auth";

function Navbar({ toggleDrawer, setCreateEditChannelBtn }) {
  const [authBtn, setAuthBtn] = useState(false);
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

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log(res)
    const Email = res.profileObj.email;
    const Id = res.profileObj.googleId;
    dispatch(login({ email: Email ,id:Id }));
  };

  const onFailure = (res) => {
    console.log("Failed", res);
  };

  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className="logo_div_Navbar">
            <img src={logo} alt="youtube_logo" />
            <p className="logo_title_Navbar">You Tube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine className={"vid_bell_Navbar"} />
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
        <div className="Auth_cont_Navbar">
          {CurrentUser ? (
            <>
              <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
                <p className="fstChar_logo_App">
                  {CurrentUser?.result.name ? (
                    <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                clientId="43577689875-d79271sekk6rlup7n5k0est2ve74hv3v.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p className="Auth_Btn" onClick={renderProps.onClick}>
                    <BiUserCircle size={22} />
                    <b>Sign in</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>
      {authBtn && (
        <Auth
          setCreateEditChannelBtn={setCreateEditChannelBtn}
          setAuthBtn={setAuthBtn}
          User={CurrentUser}
        />
      )}
    </>
  );
}

export default Navbar;
