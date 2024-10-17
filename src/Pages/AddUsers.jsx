import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let [values, setValues] = useState({ username: "", email: "" });
    let navigate = useNavigate();

    // Handle input changes
    function change(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    // Handle form submission and add user
    function addUser(e) {
        e.preventDefault(); // Prevent form refresh
        axios.post("http://localhost:3000/arr", values)
            .then(() => {
                navigate("/"); // Navigate back to the home page after adding user
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Enter Data</h1>
            <form onSubmit={addUser}> {/* Attach onSubmit to the form */}
                <input
                    type="text"
                    placeholder='Enter username'
                    name='username'
                    onChange={change}
                    value={values.username}
                /><br />
                <input
                    type="email"
                    placeholder='Enter email'
                    name='email'
                    onChange={change}
                    value={values.email}
                /><br />
                <button type="submit">Add</button> {/* Keep type='submit' as it's inside a form */}
            </form>
        </div>
    );
}

export default AddUser;
