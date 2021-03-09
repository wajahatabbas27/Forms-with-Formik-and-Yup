import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

const FormikYupForms = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name Field is Required")
                .max(15, "Name Field should me less than 15 characters"),
            age: Yup.number()
                .required("Age Field is Required")
                .max(80, "Age should be less than 80")
                .min(12, "Age should be greater than 12")
        })
    });

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Formik-Yup Forms</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name ?
                        <div style={{ color: "red" }}>{formik.errors.name}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" {...formik.getFieldProps("age")} />
                    {formik.errors.age ?
                        <div style={{ color: "red" }}>{formik.errors.age}</div> : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikYupForms;
