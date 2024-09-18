import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN number is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <h2>Book Form</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage name="author" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" type="text" className="form-control" />
            <ErrorMessage name="isbn" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="error-message" />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {initialValues.isbn ? 'Update Book' : 'Add Book'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
