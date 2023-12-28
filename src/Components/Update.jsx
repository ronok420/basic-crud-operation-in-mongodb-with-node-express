import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const  data=useLoaderData();

    const handleUpdate= (e)=>{
        e.preventDefault();
        const email= e.target.text.value;
        const pass=e.target.pass.value;
        console.log(email,pass);
        const userData={email,pass}

        fetch(`http://localhost:5000/users/${data._id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(userData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                alert('data updated successfully')
            }
        })
    }

    return (
        <div>
       <h2>this email belogs to {data.email}</h2> 



       <form onSubmit={handleUpdate} action="">
        <input type="text" name="text" defaultValue={data.email} id="" />
        <input type="password" name="pass" defaultValue={data.pass} id="" />
        <input type="submit" value="submit" />
       </form>
            
        </div>
    );
};

export default Update;