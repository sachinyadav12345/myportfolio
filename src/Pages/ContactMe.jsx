import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  title: "",
  comment: "",
};
function ContactMe() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    subject: Yup.string().required("Subject is required"),
    comment: Yup.string().required("comment is required"), // Corrected: Title is required
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  const { values, errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <>
      <div className="contact-me" id="contact">
        <div className="container">
          <div
            className="contact-heading-content mb-5 text-center"
         
          >
            <h2>Contact Me</h2>
            
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-3 contact-section"
            
            >
              <div className="box text-center p-4 ">
                <div className="icon ">
                  <FaLocationDot className="icon-inner" />
                </div>
                <div className="contant">
                  <h5 className="mb-4">Address</h5>
                  <p> Vijaynagar Indore Mp India</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 contact-section"
             
            >
              <div className="box text-center p-4 ">
                <div className="icon ">
                  <IoCall className="icon-inner" />
                </div>
                <div className="contant">
                  <h5 className="mb-4">Contact</h5>
                  <p> 91 + 8889291138</p>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 contact-section"
            
            >
              <div className="box text-center p-4 ">
                <div className="icon ">
                  <MdEmail className="icon-inner" />
                </div>
                <div className="contant">
                  <h5 className="mb-4">Email</h5>
                  <p>
                    Sachinyaduwanshisy123 <br />
                    @gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 contact-section"
             
            >
              <div className="box text-center p-4 ">
                <div className="icon ">
                  <FaGlobeAmericas className="icon-inner" />
                </div>
                <div className="contant">
                  <h5 className="mb-4">Website</h5>
                  <p>www.SachinYaduwanshi.com</p>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-light mt-5">
            <div className="col-lg-6" >
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://maps.google.com/maps?q=indoe&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  allowfullscreen
                  style={{ width: "100%", height: "90vh" }}
                ></iframe>
              </div>{" "}
            </div>
            <div className="col-lg-6 pt-4 " >
              <form action="" onSubmit={handleSubmit}>
                <div className="Your-name pb-3">
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    id="Yourname"
                    value={values.name}
                    onChange={formik.handleChange}
                    name="name"
                    {...getFieldProps("name")}
                    helperText={touched.name && errors.name}
                    error={Boolean(touched.name && errors.name)}
                    InputProps={{
                      style: { backgroundColor: "#FEECE6" },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      input: {
                        color: "rgba(0, 0, 0, 0.70)",
                        "&::placeholder": {
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </div>
                <div className="email mb-4">
                  <TextField
                    fullWidth
                    placeholder="Your Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={formik.handleChange}
                    {...getFieldProps("email")}
                    helperText={touched.email && errors.email}
                    error={Boolean(touched.email && errors.email)}
                    InputProps={{
                      style: { backgroundColor: "#FEECE6" },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      input: {
                        color: "rgba(0, 0, 0, 0.70)",
                        "&::placeholder": {
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </div>

                <div className="Subject mb-4">
                  <TextField
                    fullWidth
                    placeholder="Subject"
                    id="subject"
                    value={values.subject}
                    onChange={formik.handleChange}
                    name="subject"
                    {...getFieldProps("subject")}
                    helperText={touched.subject && errors.subject}
                    error={Boolean(touched.subject && errors.subject)}
                    InputProps={{
                      style: { backgroundColor: "#FEECE6" },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      input: {
                        color: "rgba(0, 0, 0, 0.70)",
                        "&::placeholder": {
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </div>
                <div className="Your-message-comment mb-5">
                  <TextField
                    fullWidth
                    // label="Comment*"
                    name="comment"
                    placeholder="Your Message*"
                    id="fullWidth"
                    value={values.comment}
                    onChange={formik.handleChange}
                    {...getFieldProps("comment")}
                    helperText={touched.comment && errors.comment}
                    error={Boolean(touched.comment && errors.comment)}
                    multiline
                    rows={5}
                    InputProps={{
                      style: { backgroundColor: "#FEECE6" },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },

                      "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder":
                        {
                          color: "rgba(0, 0, 0, 0.70)",
                          opacity: "1",
                        },
                    }}
                  />
                </div>

                <div className="button pb-5">
                  <button className="btn contact-button" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
