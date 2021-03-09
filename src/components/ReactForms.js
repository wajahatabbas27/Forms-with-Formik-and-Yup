import React, { useRef, useState } from 'react'

const ReactForms = () => {

    const name = useRef();
    const age = useRef();
    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(age.current.value);

        //handling errors in validation
        //name validation
        if (!name.current.value) {
            setNameError("Name field is required")
        } else if (name.current.value > 20) {
            setNameError("Name field must be less then 20 characther")
        }

        //age validation
        if (!age.current.value) {
            setAgeError("Age field is required")
        } else if (age.current.value < 18) {
            setAgeError("Age must be greater then 18 ");
        }

    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>React Simple Forms</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={name} />
                    <div style={{ color: "red" }}>{nameError}</div>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="name" ref={age} />
                    <div style={{ color: "red" }}>{ageError}</div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactForms
