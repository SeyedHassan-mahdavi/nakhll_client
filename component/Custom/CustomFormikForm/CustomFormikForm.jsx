import { Formik } from "formik";
import React, { Fragment } from "react";

const CustomFormikForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({}) => children}
      </Formik>
    </Fragment>
  );
};

export default CustomFormikForm;
