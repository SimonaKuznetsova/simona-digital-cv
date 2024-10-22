import React, { useEffect, useState } from "react";
import "../../styles/Work.scss";

const Work = () => {

  const JobItem = ({position, company, term, isActive}) => {
    return (
      <div className="jobItem">
        <div className={`position ${isActive && 'activeJob'}`}>{position}</div>
        <div className="rightCol">
          <div className="company">{company}</div>
          <div className="term">{term}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="Work">
      <div className="box">
        <div>
          <div className="yearTerm">4 YEARS OF</div>
          <div className="exp">EXPERIENCE</div>
        </div>

        <div className="jobsWrapper">
          <JobItem 
            position={'Freelancer'}
            company={'UpWork'}
            term={'August, 2024 - Present'}
            isActive={true}
          />
          <JobItem 
            position={'Front End Engineer'}
            company={'IDeus'}
            term={'March, 2022 - July, 2024'}
          />
          <JobItem 
            position={'Front End Engineer'}
            company={'Caro'}
            term={'January, 2021 - February, 2022'}
          />
          <JobItem 
            position={'Freelancer'}
            company={'Freelancehunt'}
            term={'May, 2020 - December, 2020'}
          />
          <JobItem 
            position={'React.js School'}
            company={'Yalantis'}
            term={'January, 2020 - Fabruary, 2020'}
          />
          <JobItem 
            position={'Front End Internship'}
            company={'Lanp'}
            term={'September, 2019 - May, 2020'}
          />
          <JobItem 
            position={'Administrator'}
            company={'Rezultat'}
            term={'August, 2018 - May, 2019'}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
