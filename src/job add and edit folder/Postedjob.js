import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API_URL } from '../App';

export function Postedjob() {
  const [job, setJob] = useState([]);

  const getJobs = () => {
    fetch(`${API_URL}/job`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setJob(mvs));
  };

  useEffect(getJobs, []);

  const deleteMovie = (_id) => {
    fetch(`${API_URL}/job/${_id}`, { method: "DELETE" })
      .then(() => getJobs());
  };
  const history = useHistory();
  return (
    <div>
      {job.map(({ title, company, briefdescription, salaryrange, experience, posteddate, _id }) => (<Postedjobsdetails title={title}
        key={_id}
        id={_id}
        company={company}
        briefdescription={briefdescription}
        salaryrange={salaryrange}
        experience={experience}
        posteddate={posteddate}
        deleteButton={<IconButton aria-label="delete" color="error"
          onClick={() => deleteMovie(_id)}>
          <DeleteIcon />
        </IconButton>}
        editButton={<IconButton
          aria-label="edit" color="success"
          onClick={() => history.push("/postedjob/edit/" + _id)}>
          <EditIcon />
        </IconButton>} />))}
    </div>
  );
}
function Postedjobsdetails({ title, company, briefdescription, salaryrange, experience, id, deleteButton, editButton }) {
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

          {editButton}{deleteButton}
        </div>
      </div>
    </div>
  );
}
