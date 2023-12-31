import React from "react";
import LoginWelcome from "@/components/templates/LoginWelcome";
import { LOGIN_PAGE } from "@/routes/paths";
import { NextRouterWrapper } from "@/routes";

const LoginWelcomeContainer = () => {
  const onLoginClickHandler = () => {
    NextRouterWrapper({
      pathName: LOGIN_PAGE,
    });
  };
  return (
    <LoginWelcome onLoginClickHandler={onLoginClickHandler}></LoginWelcome>
  );
};

export default LoginWelcomeContainer;
