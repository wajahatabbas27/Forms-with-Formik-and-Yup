import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup';
import React from 'react'

const FormikContext = () => {

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Formik Context Forms</h1>
            <Formik initialValues={{
                name: "",
                age: 0
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name Field is Required")
                        .max(15, "Name Field should me less than 15 characters"),
                    age: Yup.number()
                        .required("Age Field is Required")
                        .max(80, "Age should be less than 80")
                        .min(12, "Age should be greater than 12")
                })}>

                {(formik) =>
                    (
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="name">Name::</label>
                                <Field type="text" name="name" id="name" />        {/*yh field input ki jaga use horha hai formik ka apna tag hai yh Field aur ErrorMessage*/}
                                <ErrorMessage name="name" render={(msg) => (
                                    <span style={{ color: "red" }}>{msg}</span>
                                )} />
                            </div>
                            <div>
                                <label htmlFor="age">Age::</label>
                                <Field type="number" name="age" id="age" />
                                <ErrorMessage name="age" render={(msg) => (
                                    <span style={{ color: "red" }}>{msg}</span>)} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    )
                }

            </Formik>
        </div >
    )
}

export default FormikContext
