import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { API_URL } from '../App';

export function Home() {
  const [job, setJob] = useState([]);

  const getJobs = () => {
    fetch(`${API_URL}/job`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setJob(mvs));
  };

  useEffect(getJobs, []);

  return (
    <section>
      {job.map(({ title, company, briefdescription, salaryrange, experience, posteddate, _id }) => (<Jobs title={title}
        key={_id}
        id={_id}
        company={company}
        briefdescription={briefdescription}
        salaryrange={salaryrange}
        experience={experience}
        posteddate={posteddate} />))}
    </section>

  );
}
function Jobs({ title, company, briefdescription, salaryrange, experience, posteddate, id }) {
  const history = useHistory();
  return (
    <div className='container'>
      <div className="full-details">
        <div className='div-flex'>
          <h2 className='title title-mar'>{title}</h2>
          <h4 className='title title-mar'><span className='span'>Company : </span> {company}</h4>

        </div>
        <hr className='hr-line' />
        <div className='div-flex'>
          <p className='title title-margin'>{briefdescription}</p>
          <p className='title title-margin'><span className='span'>Salary :  </span> {salaryrange}</p>
          <p className='title title-margin'><span className='span'>Experience :  </span> {experience}</p>
        </div>
        <div className='button-date-flex'>
          <Button variant="contained" onClick={() => {
            console.log(id);
            history.push("/home/" + id);
          }}>view more</Button>
          <p className='title'><span className='span'>Posted on :  </span> {posteddate}</p>
        </div>
      </div>
    </div>
  );
}
export function Moredetails() {
  const history = useHistory();
  const { id } = useParams();
  console.log("the id is ", id);
  const [jobdet, setJobdet] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/job/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setJobdet(mv));
  }, [id]);

  console.log(jobdet);
  return (
    <div className='more-details-div'>
      <p className='title title-margin'><span className='span'>Role : </span>{jobdet.title}</p>
      <p className='title title-margin'> <span className='span'>Company : </span> {jobdet.company}</p>
      <p className='title title-margin'><span className='span'>Department :  </span> {jobdet.department}</p>
      <p className='title title-margin'><span className='span'>Salary :  </span> {jobdet.salaryrange}</p>
      <p className='title title-margin'><span className='span'>Experience :  </span> {jobdet.experience}</p>
      <p className='title title-margin'><span className='span'>Skills :  </span> {jobdet.skillsrequired}</p>
      <p className='title title-margin'><span className='span'>Qualification :  </span> {jobdet.minimumqualification}</p>
      <p className='title title-margin'><b>Brief-description : </b>{jobdet.briefdescription}</p>
      <p className='title title-margin'><span className='span'>Detailes:</span>{jobdet.detailedescription}</p>

      <div className='button-back-flex'>
        <Button onClick={() => history.push("/home")} variant="outlined"><KeyboardBackspaceIcon />Back</Button>

      </div>
    </div>
  );
}
