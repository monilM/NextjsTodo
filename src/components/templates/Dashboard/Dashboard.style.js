import styled from "styled-components";

const DashboardStyleWrapper = styled.div`
  // Dashboard.css

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
  // TodoList.css
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  // TodoItem.css
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .todo-item-buttons {
    display: flex;
    gap: 10px;
  }
  .listTitleStyle {
    font-weight: bold;
    display: block;
    margin-top: 30px;
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

export default DashboardStyleWrapper;
