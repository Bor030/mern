import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser(){

    const {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate()

    
    useEffect(() => {

        axios.get('/getUser/'+id).then(result => 
            {setName(result.data.name)
            setEmail(result.data.email)
            setPosition(result.data.position)
        })
        .catch(err => console.log(err))
 }, []) 

 
 const upDate = e => {

    e.preventDefault()
        axios.put("/updateUser/"+id, {name,email,position})
        .then(navigate('/users/')).catch(err => console.log(err))
   
 }
    return(
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <form onSubmit={upDate}>
                <h2>Update</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                    value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Email" className="form-control"
                    value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Position</label>
                    <input type="text" placeholder="Enter Position" className="form-control"
                    value={position} onChange={(e) => setPosition(e.target.value)}></input>
                </div>
                <button className="btn btn-success">Update</button>
            </form>


            </div>

        </div>
    )
}

export default UpdateUser