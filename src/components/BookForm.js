import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string()
      .required('ISBN is required')
      .matches(/^[0-9]{13}$/, 'ISBN must be 13 digits'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
