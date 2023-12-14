import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const { Email, Id } = data;
    if (!Email.trim() || !Id.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    dispatch(login({ email: Email, id: Id }));
    navigate("/");
  };

  return (
    <div className="Container_Pages_App">
      <div className="Container2_Pages_App">
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
