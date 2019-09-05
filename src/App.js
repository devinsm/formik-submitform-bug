import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <Formik
      validationSchema={Yup.object().shape({
        testVal: Yup.string().required()
      })}
      initialValues={{}}
    >
      {formikProps => (
        <>
          <button
            onClick={() =>
              formikProps
                .submitForm()
                .then(val => console.log("Promise resolved with: ", val))
                .catch(error => console.log("Promise rejected with: ", error))
            }
          >
            Submit
          </button>
          <pre
            style={{
              background: "#f6f8fa",
              fontSize: ".65rem",
              padding: ".5rem"
            }}
          >
            <strong>props</strong> = {JSON.stringify(formikProps, null, 2)}
          </pre>
        </>
      )}
    </Formik>
  );
}

export default App;
