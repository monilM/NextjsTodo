import React from "react";
import Layout from "../components/templates/Layout/Layout";
import LoginWelcomeContainer from "@/containers/templates/LoginWelcome";

const Home = () => {
  return (
    <Layout>
      <LoginWelcomeContainer />
    </Layout>
  );
};

export default Home;
