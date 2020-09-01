import React from "react";
import Header from "../header/Header";
import headerBackground from "../../assets/images/Banner.jpg";
import Filter from "../filter/Filter";
import JobCard from "../jobCard/JobCard";
import Footer from "../footer/Footer";
import Layout from "../Layout";

const Home = () => {
  return (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <Filter />
      </Header>
      <Layout>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
