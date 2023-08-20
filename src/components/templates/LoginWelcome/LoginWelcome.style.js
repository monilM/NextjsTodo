import styled from "styled-components";

const LoginWelcomeStyleWrapper = styled.div`
  margin: 0 auto;
  margin-top:100px;
  display:flex;
  justify-content:center;
  
  .pageHeading {
    margin-top: 0;
    margin-bottom:50px;
  }

  .buttonCustom {
    font-size: ${(props) => props.theme.typography.FONT_SIZES.xlargeLabel};
    text-align: center;
    width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 12px;
    border-color: ${(props) => props.theme.colors.greyscaleJetblack};
    font-weight: 600;
    background-color: #007bff;
    color: white;
  }
  button:hover {
    background-color: #0056b3;
  }
  .buttonsContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // align-items: center;
  }

  .buttonHeight {
    height: 150px;
    text-align: left;
    display: flex;
    & > span {
      float: right;
      padding-top: 15%;
    }
  }
  }
`;

export default LoginWelcomeStyleWrapper;
