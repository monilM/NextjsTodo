import styled from "styled-components";

export const LoaderWrapper = styled.div`
  // .loaderContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  // }

  .loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #007bff; /* Loader color */
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
