import styled from "styled-components";

const TodoFormStyleWrapper = styled.div`
  // //   .todo-form-container {
  // max-width: 400px;
  // margin: 0 auto;
  // padding: 20px;
  // border: 1px solid #ccc;
  // border-radius: 8px;
  // background-color: #f5f5f5;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  // //   }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  .dashboardBox {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
  }

  .titleStyle {
    margin-bottom: 40px;
    text-align: center;
    margin-top: 0;
  }

  .todo-form-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .form-label {
    font-weight: bold;
  }

  .form-input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
  }

  .form-button:hover {
    background-color: #0056b3;
  }
`;

export default TodoFormStyleWrapper;
