import React from "react";
import { Formik } from "formik";
import "./sign-up.styles.scss";

import { signInWithGoogle } from '../../firebase-auth/firebase.auth.config';

export default function SignUpComponent() {
  return (
    <div className="sign-up-form-container">
      <h1>SignUpComponent</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form-elements" onSubmit={handleSubmit}>
            <input
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            
            {errors.email && touched.email && errors.email}
            <input
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button onClick={signInWithGoogle} disabled={isSubmitting}>
              Google Sign IN
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
