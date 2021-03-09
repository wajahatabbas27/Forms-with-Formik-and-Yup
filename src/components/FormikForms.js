import { useFormik } from 'formik';
import React from 'react'

const FormikForms = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            const error = {};

            if (!values.name) {
                error.name = "Name field is required"
            } else if (values.name.length > 20) {
                error.name = "Name field must be less then 20 characther"
            }

            if (!values.age) {
                error.name = "Age field is required"
            } else if (values.age < 10) {
                error.name = "Age must be greater then 10 "
            }

            return error;
        }
    });

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Formik Forms</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={formik.handleChange} value={formik.values.age} />
                    <div style={{ color: "red" }}>{formik.errors.age}</div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikForms;
