import React from "react";
import { Link } from "react-router-dom";
import focusLogo from "../../assets/images/logo-focus.svg";
import ubicationLogo from "../../assets/images/ubicationLogo.svg";
import moneyLogo from "../../assets/images/money.svg";
import clockLogo from "../../assets/images/clock.svg";
import "../../assets/styles/components/jobCard/JobCard.scss";

const jobCard = (props) => {
  const { logo, time, jobTitle, location, salary, profile } = props
  return (
    <article className="card-Container">
      <figure className="logo-Container">
        <img src={logo} className="img-Container" />
      </figure>
      <div className="general-Information">
        <p className="update-Status">New</p>
        <p className="pub-Time">{time}</p>
        <h2>{jobTitle}</h2>
        <figure className="Logos">
          <img src={ubicationLogo} className="Logitos" alt="ubicationLogo" />
          <figcaption>{location}</figcaption>

          <img src={moneyLogo} className="Logitos" alt="moneyLogo" />
          <figcaption>{salary}</figcaption>

          <img src={clockLogo} className="Logitos" alt="clockLogo" />
          <figcaption>Full Time</figcaption>
        </figure>
      </div>
      <div className="works">
        <h4 className="worksNames">{profile}</h4>
      </div>
      <div className="works">
        <Link to="/job" className="worksNames">
          Description
        </Link>
      </div>
    </article>
  );
};
export default jobCard;
