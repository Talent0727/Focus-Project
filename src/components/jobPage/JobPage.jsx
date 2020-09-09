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
    fetch(`https://jobs-platzi-master.herokuapp.com/jobs/${props.location.search.split('=')[1]}`)
    .then(response => response.json())
    .then(data => setJobPageInfo(data.body))
  }, [])

  return (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <div className="header__job-position">
          <h1>Data Analist</h1>
          <button>Apply for this job</button>
        </div>
      </Header>
      <Layout>
        <article className="description__container">
          <div>
            <h4>Description</h4>
            <p>
            {
              jobPageInfo.length > 0 ? jobPageInfo[0].JobDescription : 'There is no information to display'
            } 
            </p>
          </div>
          <figure>
            <img src={
              jobPageInfo.length > 0 ? jobPageInfo[0].Images : 'There is no information to display'
            } alt="company logo" />
          </figure>
        </article>
        <article>
          <h4>Responsibilities</h4>
          <p>
            Develop, construct, test, and maintain architectures, such as databases and analytic environments and platform required for structured,
            semi-structured and unstructured data. Design and develop data pipelines that deliver accurate, consistent, and traceable datasets for
            data science projects. Support regular and ad-hoc data needs for data scientists. Provide recommendations and implement ways to improve
            data reliability, efficiency, and quality.
          </p>
        </article>
        <article>
          <h4>Qualifications</h4>
          <p>
            Bachelor's or Master's degree obtained from an accredited institution preferably in Computer Science, Computer Engineering, and Software
            Engineering, Data Science, or a related field. 3-5 years of professional experience in data science or related field. Experience in
            database deployment and management and proficient in SQL. Experience in data warehousing and ETL (Extract, Transform, and Load) Proficient
            in R, Python, VBA, Excel and Word. Excellent oral and written communication
          </p>
        </article>
        <article>
          <h4>Required Skills / knowledge</h4>
          <p>
          {
              jobPageInfo.length > 0 ? jobPageInfo[0].Skills : 'There is no information to display'
            } 
          </p>
        </article>
        <article className="container__techologies-requirements">
          <div className="container__techologies">
            <h4>Technologies and Tools:</h4>
            <p>
              Oracle 11g/12c, Toad for Oracle, Linux, Putty, GitHub, Rally, Nice to have: Informatica, Python, Aurora, and Hive in sprint planning,
              design, coding, unit testing, and sprint reviews. Our generous
            </p>
          </div>
          <div className="container-requirements">
            <h4>Requirements</h4>
            <div className="requirements__container">
              <div>
                <p>Java Script</p>
                <p>Angular</p>
                <p>GraphQl</p>
                <p>Sass</p>
                <p>MySQL</p>
                <p>Shell</p>
              </div>

              <div>
                <p>PostgreSQL</p>
                <p>React/React Native</p>
                <p>Front-End</p>
                <p>Webpack</p>
                <p>Spark SQL</p>
                <p>Python</p>
              </div>
            </div>
          </div>
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
