import React from 'react';
import { connect, getIn } from 'formik';

const ErrorMessage = (props) => {
  // All FormikProps available on props.formik!
  const error = getIn(props.formik?.errors, props.name);
  const touch = getIn(props.formik?.touched, props.name);
  return (
    <div className="text-danger text-sm mb-4 h-6">
      {touch && error ? error : null}
    </div>
  );
};

export default connect(ErrorMessage);
