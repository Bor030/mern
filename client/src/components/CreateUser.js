import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser(){

    
    const[user, setUser] = useState({name:'',email:'', position:''})
   
    const {name, email, position} = user

    const navigate = useNavigate()

    const onChange = e => setUser({...user, [e.target.name]:e.target.value})
    const Submit = (e) => {

        e.preventDefault()
        axios.post("/create/", {...user})
        .then(navigate('/users/'))
    }

    return(
        
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Submit}>
                <h2>Add user</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input name="name" value={name}  type="text" placeholder="Enter Name" className="form-control"
                    onChange={onChange}></input>
                    
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input name="email" value={email} type="text" placeholder="Enter Email" className="form-control"
                    onChange={onChange}></input>
                    
                </div>
                <div className="mb-2">
                    <label htmlFor="">Position</label>
                    <input name="position" value={position} type="text" placeholder="Enter Position" className="form-control"
                    onChange={onChange}></input>
                    
                </div>
                <button className="btn btn-success">Submit</button>
            </form>


            </div>

        </div>
    )
}

export default CreateUser