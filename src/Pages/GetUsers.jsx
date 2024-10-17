import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import './GetUsers.css'; // Import the CSS file

const GetUsers = () => {
    let [state, setState] = useState([]);
    let [thead, setThead] = useState([]);
    let navigate = useNavigate();

    let deletes = (id) => {
        axios.delete(`http://localhost:3000/arr/${id}`)
            .then(() => {
                setState(prevState => prevState.filter(user => user.id !== id));
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:3000/arr")
            .then(result => {
                setState(result.data);
                setThead(Object.keys(result.data[0]).slice(2, 5)); // Adjust slicing as per your data structure
            })
            .catch(err => console.log(err))
    }, []); // Only run once, so no need to depend on 'state'

    return (
        <div className="table-container">
            <table>
                <caption>CRUD OPERATIONS
                    <button className="add-btn" onClick={() => navigate("/add")}>Add+</button>
                </caption>
                <thead>
                    <tr>
                        {thead.map((x) => <th key={x}>{x}</th>)}
                        <th>Password</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((x) => (
                        <tr key={x.id}>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td>
                                <Link to={`/update/${x.id}`}>
                                    <button className="edit-btn">Edit</button>
                                </Link> 
                                <button className="delete-btn" onClick={() => deletes(x.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetUsers;
