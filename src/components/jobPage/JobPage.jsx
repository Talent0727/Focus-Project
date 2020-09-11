import React, {useState, useEffect} from "react";

import Header from "../header/Header";
import Layout from "../Layout";
import Footer from "../footer/Footer";
import headerBackground from "../../assets/images/BannerJob.jpeg";
import companyLogo from "../../assets/images/oracleLogo.jpeg";
import healthImg from "../../assets/images/insurance.png";
import dentalImg from "../../assets/images/dentist.png";
import telecommutingImg from "../../assets/images/work-from-home.png";
import vacationImg from "../../assets/images/beach.png";
import lunchImg from "../../assets/images/lunch.png";
import parkingImg from "../../assets/images/car.png";
import gymImg from "../../assets/images/exercise.png";
import "../../assets/styles/components/jobPage/JobPage.scss";

const JobPage = (props) => {

  const [jobPageInfo, setJobPageInfo] = useState([])

  useEffect(() => {
    fetch(`https://jobs-platzi-master.herokuapp.com/jobs/id/${props.location.search.replace('?id=', '')}`)
    .then(response => response.json())
    .then(data => setJobPageInfo(data.body))
  }, [])

  return (
    <React.Fragment>
    <Header bgImage={headerBackground}>
      <div className="header__job-position">
        <h1>{jobPageInfo.length > 0 ? jobPageInfo[0].JobTitle : 'Theres is no information to display'}</h1>
        <button>Apply for this job</button>
      </div>
    </Header>
    <Layout>
      <figure className="logo__company">
        <img src={jobPageInfo.length > 0 ? jobPageInfo[0].Images : 'There is no logo to display'} alt="company logo" />
      </figure>
      <article className="jobInfo__container">
        <div>
          <h4>Description</h4>
          <p>{jobPageInfo.length > 0 ? jobPageInfo[0].JobDescription : 'There is no information to display'}</p>
        </div>
      </article>
      <article className="jobInfo__container">
        <h4>Responsibilities</h4>
        <p>
        {jobPageInfo.length > 0 ? jobPageInfo[0].Responsibilities : 'There is no information to display'} 
        </p>
      </article>
      <article className="jobInfo__container">
        <h4>Qualifications</h4>
        <p>
        {jobPageInfo.length > 0 ? jobPageInfo[0].Qualifications : 'There is no information to display'}       
        </p>
      </article>
      <article className="jobInfo__container">
        <h4>Required Skills / knowledge</h4>
        <p>
        {jobPageInfo.length > 0 ? jobPageInfo[0].Skills : 'There is no information to display'}  
        </p>
      </article>
      
      <article className="container__benefits">
        <h4>Benefits package</h4>
        <div className="benefits">
          <div>
            <img src={healthImg} alt=" health image" />
            <p>Health Insurance</p>
          </div>
          <div>
            <img src={dentalImg} alt="dentis image" />
            <p>Dental Insurance</p>
          </div>
          <div>
            <img src={telecommutingImg} alt="telecommuting image" />
            <p>Telecommuting</p>
          </div>
          <div>
            <img src={vacationImg} alt="vaction image" />
            <p>Flexible vacation and paid time off</p>
          </div>
          <div>
            <img src={lunchImg} alt="lunch image" />
            <p>Free lunch and snacks at all offices</p>
          </div>
          <div>
            <img src={parkingImg} alt="parking image" />
            <p>Free on-site parking</p>
          </div>
          <div>
            <img src={gymImg} alt="gym image" />
            <p>Onsite Gym Membership</p>
          </div>
        </div>
      </article>
    </Layout>
    <Footer />
  </React.Fragment>
  );
};

export default JobPage;
