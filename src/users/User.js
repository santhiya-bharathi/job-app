import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { API_URL } from '../App';

export function User() {
  const [userlist, setUserlist] = useState([]);

  const getUser = () => {
    fetch(`${API_URL}/user`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setUserlist(mvs));
  };

  useEffect(getUser, []);
  const history = useHistory();
  return (
    <section>

      {userlist.map(({ firstname, lastname, mobile, portfolio, email, about, address, education, skill, experience, project, _id }) => (<Userdetails firstname={firstname}
        key={_id}
        id={_id}
        lastname={lastname}
        mobile={mobile}
        portfolio={portfolio}
        email={email}
        about={about}
        address={address}
        education={education}
        skill={skill}
        experience={experience}
        project={project}
        editButton={<IconButton
          aria-label="edit" color="success"
          onClick={() => history.push("/userdetail/edit/" + _id)}>
          <EditIcon />
        </IconButton>} />))}
    </section>
  );
}
function Userdetails({ firstname, lastname, mobile, portfolio, email, about, address, education, skill, experience, project, id, editButton }) {
  return (
    <div className='container'>
      <div className="full-details">
        <h2 className='intro'>User details</h2>
        <p className='title title-margin'><span className='span'>firstname :  </span> {firstname}</p>
        <p className='title title-margin'><span className='span'>lastname :  </span> {lastname}</p>
        <p className='title title-margin'><span className='span'>mobile :  </span> {mobile}</p>
        <p className='title title-margin'><span className='span'>portfolio :  </span> {portfolio}</p>
        <p className='title title-margin'><span className='span'>email :  </span> {email}</p>
        <p className='title title-margin'><span className='span'>about :  </span> {about}</p>
        <p className='title title-margin'><span className='span'>education :  </span> {education}</p>
        <p className='title title-margin'><span className='span'>skill :  </span> {skill}</p>
        <p className='title title-margin'><span className='span'>experience :  </span> {experience}</p>
        <p className='title title-margin'><span className='span'>address :  </span> {address}</p>
        <p className='title title-margin'><span className='span'>project :  </span> {project}</p>

        {editButton}
      </div>
    </div>
  );
}
