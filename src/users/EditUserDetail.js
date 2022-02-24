import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API_URL } from '../App';

export function EditUserDetail() {
  const { id } = useParams();

  const [userdet, setUserdet] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/user/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setUserdet(mv));
  }, [id]);

  return userdet ? <UpdateUserDetail userdet={userdet} /> : "";

}
function UpdateUserDetail({ userdet }) {
  const history = useHistory();

  const formvalidationschema = yup.object({
    firstname: yup.string().required("why not fill this firstname?").min(2),
    lastname: yup.string().required("why not fill this lastname?").min(1),
    mobile: yup.number().required("why not fill this mobile?").min(10),
    portfolio: yup.string().required("why not fill this portfolio?").min(1),
    email: yup.string().required("why not fill this email?").min(1),
    about: yup.string().required("why not fill this about?").min(1),
    address: yup.string().required("why not fill this address?").min(1),
    education: yup.string().required("why not fill this education?").min(1),
    skill: yup.string().required("why not fill this skill?").min(2),
    experience: yup.string().required("why not fill this experience?").min(1),
    project: yup.string().required("why not fill this project?").min(1),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      firstname: userdet.firstname,
      lastname: userdet.lastname,
      mobile: userdet.mobile,
      portfolio: userdet.portfolio,
      email: userdet.email,
      about: userdet.about,
      address: userdet.address,
      education: userdet.education,
      skill: userdet.skill,
      experience: userdet.experience,
      project: userdet.project
    },

    validationSchema: formvalidationschema,

    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie = (updatedMovie) => {

    console.log(updatedMovie);

    fetch(`${API_URL}/user/${userdet._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.push("/userdetail"));
  };
  return (
    <form onSubmit={handleSubmit} className="in-con">

      <div className='two-flex'>
        <div>
          <label className='title-flex'>Firstname</label>
          <div className='title-flex'>
            <input id="firstname"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter your firstname"
              error={errors.firstname && touched.firstname}
              helperText={errors.firstname && touched.firstname && errors.firstname}
              className="user-text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Lastname</label>
          <div className='title-flex'>
            <input id="lastname"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter your lastname"
              error={errors.lastname && touched.lastname}
              helperText={errors.lastname && touched.lastname && errors.lastname}
              className="user-text-area" />
          </div>
        </div>

        <div>
          <label className='title-flex'>Mobile.No</label>
          <div className='title-flex'>
            <input id="mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter your mobile number"
              error={errors.mobile && touched.mobile}
              helperText={errors.mobile && touched.mobile && errors.mobile}
              className="user-text-area" />
          </div>
        </div>
      </div>


      <div className='two-flex'>
        <div>
          <label className='title-flex'>Portfolio</label>
          <div className='title-flex'>
            <input id="portfolio"
              name="portfolio"
              value={values.portfolio}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your portfolio"
              error={errors.portfolio && touched.portfolio}
              helperText={errors.portfolio && touched.portfolio && errors.portfolio}
              className="user-text-area" />
          </div>
        </div>

        <div>
          <label className='title-flex'>Email</label>
          <div className='title-flex'>
            <input id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              className="user-text-area" />
          </div>
        </div>

        <div>
          <label className='title-flex'>About</label>
          <div className='title-flex'>
            <input id="about"
              name="about"
              value={values.about}
              onChange={handleChange}
              onBlur={handleBlur} label="enter about"
              error={errors.about && touched.about}
              helperText={errors.about && touched.about && errors.about}
              className="user-text-area" />
          </div>
        </div>
      </div>

      <div className='two-flex'>
        <div>
          <label className='title-flex'>Address</label>
          <div className='title-flex'>
            <input id="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your address"
              error={errors.address && touched.address}
              helperText={errors.address && touched.address && errors.address}
              className="user-text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Education</label>
          <div className='title-flex'>
            <input id="education"
              name="education"
              value={values.education}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your education"
              error={errors.education && touched.education}
              helperText={errors.education && touched.education && errors.education}
              className="user-text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Skill</label>
          <div className='title-flex'>
            <input id="skill"
              name="skill"
              value={values.skill}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your skill"
              error={errors.skill && touched.skill}
              helperText={errors.skill && touched.skill && errors.skill}
              className="user-text-area" />
          </div>
        </div>
      </div>

      <div className='two-flex'>
        <div>
          <label className='title-flex'>Experience</label>
          <div className='title-flex'>
            <input id="experience"
              name="experience"
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your experience"
              error={errors.experience && touched.experience}
              helperText={errors.experience && touched.experience && errors.experience}
              className="user-text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Project</label>
          <div className='title-flex'>
            <input id="project"
              name="project"
              value={values.project}
              onChange={handleChange}
              onBlur={handleBlur} label="enter your project"
              error={errors.project && touched.project}
              helperText={errors.project && touched.project && errors.project}
              className="user-text-area" />
          </div>
        </div>
      </div>
      <div className='button-flex'>
        <Button type="submit" variant="contained">Post Details</Button>
      </div>

    </form>
  );
}
