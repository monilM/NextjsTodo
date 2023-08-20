import React from "react";
import LoginWelcomeStyleWrapper from "./LoginWelcome.style";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Paragraph from "@/components/atoms/Paragraph";

const LoginWelcome = ({ onLoginClickHandler, props }) => {
  console.log("LoginWelcomeprops", props);
  return (
    <LoginWelcomeStyleWrapper>
      <div>
        <Heading type="h2" className="pageHeading">
          Welcome to our App
        </Heading>
        <Paragraph size="medium" className="loginDesc">
          Please log in or sign up to continue.
        </Paragraph>
        <div className="buttonsContainer">
          <Button
            size="xl"
            variation="ghost"
            className="buttonCustom"
            onClick={onLoginClickHandler}
          >
            Login
          </Button>
          <Button size="xl" variation="ghost" className="buttonCustom">
            Sign Up
          </Button>
        </div>
      </div>
    </LoginWelcomeStyleWrapper>
  );
};

export default LoginWelcome;
