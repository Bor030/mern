import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'



const Users = () =>  {
 
    const[kontakti, setUsers] = useState([])

   useEffect(() => {

            axios.get('/users').then(result => setUsers(result.data))
     }) 
   const handleDelete = (id) => {

            axios.delete('/deleteUser/'+id).then(res => {console.log(res)
            window.location.reload()}).catch(err => console.log(err))
   }  
return(
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            
            <tbody>
                {kontakti.map(user => {
                    return(
                        <tr key={user._id}>

                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.position}</td>
                            <td><Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                            <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                            
                        </tr>

                    )
                }) }
            </tbody>
            </table>
        </div>
    </div>
)}

export default Users