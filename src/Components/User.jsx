import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const data=useLoaderData();
    const [userData,setUserdata] =useState(data);
 
    const handleDelete=(_id)=>{
        console.log('delete id is ',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
    
    })
        .then(res=>res.json)
        .then(data=>{
            console.log(data);
            const remaining = userData.filter(user=>user._id!==_id);
            setUserdata(remaining);
            // if ( data.deletedCount >0) {
            //     alert('Data deleted');
            //   } else {
            //     alert('User not found or not deleted');
            //   }
        })
    }
    return (
        <div>
            <h2>this is the user file data  length: {userData.length}</h2>
            {   
                userData.map(sdata => <h3 key={sdata._id}>
                    <p>ID:{sdata._id},Email:{sdata.email}<Link to={`/update/${sdata._id}`}><button>Update</button></Link><button onClick={()=>handleDelete(sdata._id)}>X</button></p>
                 

                </h3>)
            }
        </div>
    );
};

export default User;