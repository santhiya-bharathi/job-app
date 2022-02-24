import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API_URL } from '../App';

export function Editpostedjob() {

  const { id } = useParams();

  const [jobdet, setJobdet] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/job/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setJobdet(mv));
  }, [id]);

  return jobdet ? <Updatepostedjob jobdet={jobdet} /> : "";

}
function Updatepostedjob({ jobdet }) {
  const history = useHistory();

  const formvalidationschema = yup.object({
    title: yup.string().required("why not fill this title?").min(4),
    company: yup.string().required("why not fill this company?").min(1),
    department: yup.string().required("why not fill this department?").min(1),
    salaryrange: yup.string().required("why not fill this salaryrange?").min(1),
    experience: yup.string().required("why not fill this experience?").min(1),
    skillsrequired: yup.string().required("why not fill this skillsrequired?").min(1),
    minimumqualification: yup.string().required("why not fill this minimumqualification?").min(1),
    briefdescription: yup.string().required("why not fill this briefdescription?").min(1),
    detailedescription: yup.string().required("why not fill this detailedescription?").min(2),
    posteddate: yup.string().required("why not fill this posteddate?").min(1),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      title: jobdet.title,
      company: jobdet.company,
      department: jobdet.department,
      experience: jobdet.experience,
      salaryrange: jobdet.salaryrange,
      skillsrequired: jobdet.skillsrequired,
      minimumqualification: jobdet.minimumqualification,
      briefdescription: jobdet.briefdescription,
      detailedescription: jobdet.detailedescription,
      posteddate: jobdet.posteddate,
    },

    validationSchema: formvalidationschema,

    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie = (updatedMovie) => {

    console.log(updatedMovie);

    fetch(`${API_URL}/job/${jobdet._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.push("/postedjob"));
  };
  return (
    <form onSubmit={handleSubmit} className="in-con">
      <div className='two-flex'>
        <div>
          <label className='title-flex'>Title</label>
          <div className='title-flex'>
            <input id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter title"
              error={errors.title && touched.title}
              helperText={errors.title && touched.title && errors.title}
              minRows={2}
              className="text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Company</label>
          <div className='title-flex'>
            <input id="company"
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter company name"
              error={errors.company && touched.company}
              helperText={errors.company && touched.company && errors.company}
              minRows={2}
              className="text-area" />
          </div>
        </div>
      </div>

      <div className='two-flex'>
        <div>
          <label className='title-flex'>Department</label>
          <div className='title-flex'>
            <input id="department"
              name="department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              label="enter department"
              error={errors.department && touched.department}
              helperText={errors.department && touched.department && errors.department}
              minRows={2}
              className="text-area" />
          </div>
        </div>


        <div>
          <label className='title-flex'>Salary Range</label>
          <div className='title-flex'>
            <input id="salaryrange"
              name="salaryrange"
              value={values.salaryrange}
              onChange={handleChange}
              onBlur={handleBlur} label="enter salaryrange"
              error={errors.salaryrange && touched.salaryrange}
              helperText={errors.salaryrange && touched.salaryrange && errors.salaryrange}
              minRows={2}
              className="text-area" />
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
              onBlur={handleBlur} label="enter experience"
              error={errors.experience && touched.experience}
              helperText={errors.experience && touched.experience && errors.experience}
              minRows={2}
              className="text-area" />
          </div>
        </div>

        <div>
          <label className='title-flex'>Skills</label>
          <div className='title-flex'>
            <input id="skillsrequired"
              name="skillsrequired"
              value={values.skillsrequired}
              onChange={handleChange}
              onBlur={handleBlur} label="enter skillsrequired"
              error={errors.skillsrequired && touched.skillsrequired}
              helperText={errors.skillsrequired && touched.skillsrequired && errors.skillsrequired}
              minRows={2}
              className="text-area" />
          </div>
        </div>
      </div>

      <div className='two-flex'>
        <div>
          <label className='title-flex'>Minimum Qualification</label>
          <div className='title-flex'>
            <input id="minimumqualification"
              name="minimumqualification"
              value={values.minimumqualification}
              onChange={handleChange}
              onBlur={handleBlur} label="enter minimumqualification"
              error={errors.minimumqualification && touched.minimumqualification}
              helperText={errors.minimumqualification && touched.minimumqualification && errors.minimumqualification}
              minRows={2}
              className="text-area" />
          </div>
        </div>

        <div>
          <label className='title-flex'>Posting Date(enter like dec 20 2021)</label>
          <div className='title-flex'>
            <input id="posteddate"
              name="posteddate"
              value={values.posteddate}
              onChange={handleChange}
              onBlur={handleBlur} label="enter date like dec 20 2021"
              error={errors.posteddate && touched.posteddate}
              helperText={errors.posteddate && touched.posteddate && errors.posteddate}
              minRows={6}
              className="text-area" />
          </div>
        </div>
      </div>

      <div>
        <label className='title-flex'>Brief Description</label>
        <div className='title-flex'>
          <TextareaAutosize id="briefdescription"
            name="briefdescription"
            value={values.briefdescription}
            onChange={handleChange}
            onBlur={handleBlur} label="enter briefdescription"
            error={errors.briefdescription && touched.briefdescription}
            helperText={errors.briefdescription && touched.briefdescription && errors.briefdescription}
            minRows={6}
            className="text-area-details" />
        </div>
      </div>



      <div>
        <label className='title-flex'>Detaile Description</label>
        <div className='title-flex'>
          <TextareaAutosize id="detailedescription"
            name="detailedescription"
            value={values.detailedescription}
            onChange={handleChange}
            onBlur={handleBlur} label="enter detailedescription"
            error={errors.detailedescription && touched.detailedescription}
            helperText={errors.detailedescription && touched.detailedescription && errors.detailedescription}
            minRows={6}
            className="text-area-details" />
        </div>
      </div>
      <div className='button-flex'>
        <Button type="submit" variant="contained">Post Details</Button>
      </div>
    </form>
  );
}
