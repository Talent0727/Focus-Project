import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import headerBackground from "../../assets/images/Banner.jpg";
import Filter from "../filter/Filter";
import JobCard from "../jobCard/JobCard";
import Footer from "../footer/Footer";
import Layout from "../Layout";
import Spinner from '../spinner/Spinner'

const Home = () => {
  const [jobCards, setJobCards] = useState([]);

  useEffect(() => {
    fetch("https://jobs-platzi-master.herokuapp.com/jobs")
      .then((response) => response.json())
      .then(data => setJobCards(data.body));
  }, []);

  return (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <Filter />
      </Header>
      <Layout>
        {
          jobCards.length > 0 ? jobCards.map(job => (<JobCard key={job.Id} />)) : <Spinner />
        }
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
