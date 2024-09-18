import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <h2>Author Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" className="form-control" />
            <ErrorMessage name="birthDate" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <Field name="biography" as="textarea" className="form-control" rows="4" />
            <ErrorMessage name="biography" component="div" className="error-message" />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {initialValues.name ? 'Update Author' : 'Add Author'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
