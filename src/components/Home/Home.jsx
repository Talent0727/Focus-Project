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
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch("https://jobs-platzi-master.herokuapp.com/jobs")
      .then((response) => response.json())
      .then(data => setJobCards(data.body));
  }, []);

  // Data to be render by defult in the home
  const homeInfo = jobCards.slice(0, 14)

  // Data to be render by when filter is use
  const dataFilter = jobCards.filter(job => {
    if(query) {
      return job.JobTitle.toLowerCase().includes(query.toLowerCase()) || job.Location.toLowerCase().includes(query.toLowerCase()) || job.Profile.toLowerCase().includes(query.toLowerCase())
    }
  })

  const dataDefaultRender = () => {
    return homeInfo.length > 0 ? homeInfo.map(job =>
      (<JobCard key={job.Id}
        logo={job.Images}
        time={job.Time}
        jobTitle={job.JobTitle}
        location={job.Location}
        salary={job.Revenue}
        profile={job.Profile}
        id={job.Id}
      />
      )) : <Spinner />
  }

  const dataFilterRender = () => {
    return dataFilter.length > 0 ? dataFilter.map(job =>
      (<JobCard key={job.Id}
        logo={job.Images}
        time={job.Time}
        jobTitle={job.JobTitle}
        location={job.Location}
        salary={job.Revenue}
        profile={job.Profile}
        id={job.Id}
      />
      )) : <Spinner />
  }

  return  (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <div className="container">
          <div>
            <h2 className="principal-text">Encuentra tu empleo ideal</h2>
          </div>
          <div className="filter">
            <div className="input-search-text">
              <p className="text-filter">Cualquier término</p>
            </div>
          </div>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
                onChange={e => {setQuery(e.target.value)}}
              />
              <button type="submit" className="searchButton">
                <div className="search-solid icon"></div>
              </button>
            </div>
          </div>

          <div>
            <select name="ranking" id="ranking" className="ranking-form">
              <option value="">Select your ranking</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 - $2000">$1000 - $2000</option>
              <option value="$2000 - $5000">$2000 - $5000</option>
            </select>
          </div>
        </div>
      </Header>
      <Layout>
        {
          dataFilter.length === 0 ? dataDefaultRender() : dataFilterRender()
        }
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
