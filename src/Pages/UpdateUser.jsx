import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUsers = () => {
    let [values, setValues] = useState({ username: "", email: "" });
    let navigate = useNavigate();
    let { id } = useParams(); // Destructure `id` from useParams at the top

    // Handle input changes
    function change(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    // Handle form submission and update user details
    function update(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/arr/${id}`, values)
            .then(() => {
                navigate("/"); // Navigate back to home after successful update
            })
            .catch(err => console.log(err));
    }

    // Fetch user data on component mount
    useEffect(() => {
        axios.get(`http://localhost:3000/arr/${id}`)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    }, [id]); // Add `id` as a dependency to avoid missing dependency warnings

    return (
        <div>
            <h1>Edit your Profile</h1>
            <form>
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
                <button onClick={update}>Update User</button>
            </form>
        </div>
    );
}

export default UpdateUsers;
