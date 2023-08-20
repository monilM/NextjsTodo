import styled from "styled-components";

const LoginStyleWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }

  .loginBox {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
  }

  .titleStyle {
    margin-bottom: 15px;
    text-align: center;
  }

  .formGroup {
    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
export default LoginStyleWrapper;
