import * as React from 'react';
import { useEffect, useState } from "react";
import { API_URL } from '../App';

export function Listjob() {
  const [joblist, setJoblist] = useState([]);

  const getJobslist = () => {
    fetch(`${API_URL}/joblist`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setJoblist(mvs));
  };

  useEffect(getJobslist, []);
  return (
    <div>
      {joblist.map(({ jobrole, company, skills, experience, lastdate, _id }) => (<Listjobdetails jobrole={jobrole}
        key={_id}
        id={_id}
        company={company}
        skills={skills}
        experience={experience}
        lastdate={lastdate} />))}
    </div>
  );
}
function Listjobdetails({ jobrole, company, skills, experience, lastdate }) {
  return (
    <div className='container'>
      <div className="full-details-list">
        <p className='title title-margin'><span className='span'>JobRole :  </span> {jobrole}</p>
        <hr></hr>
        <p className='title title-margin'><span className='span'>Company :  </span> {company}</p>

        <p className='title title-margin'><span className='span'>Skills Required:  </span> {skills}</p>
        <p className='title title-margin'><span className='span'>Experience :  </span> {experience}</p>
        <p className='title title-margin'><span className='span'>LastDate :  </span> {lastdate}</p>
      </div>
    </div>
  );
}
