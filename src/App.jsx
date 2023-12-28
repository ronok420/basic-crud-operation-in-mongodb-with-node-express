import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const user = { email, pass };
  
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>
      {
         console.log(data)
         if(data.insertedId){
          alert("this is inserted")
         }
      })
      .catch((error) => console.error('Error:', error));
     
  
    form.reset();
  };
  

  return (
    <>
   
       
      <h1>simple crud operation</h1>
  <form onSubmit={handleSubmit} action="">
    <input type="text" name="email" placeholder='enter email' id="" />
    <input type="password" name="pass" placeholder='enter password' id="" />
    <input type="submit" value="submit" />
  </form>
      
    </>
  )
}

export default App
