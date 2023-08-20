import React, { useState } from "react";
import LoginStyleWrapper from "./Login.style";
import Heading from "@/components/atoms/Heading";

const Login = ({ handleFormSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginStyleWrapper>
      <div className="container">
        <div className="loginBox">
          <Heading type="h2" className="titleStyle">
            Login
          </Heading>
          <form onSubmit={handleFormSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </LoginStyleWrapper>
  );
};

export default Login;
