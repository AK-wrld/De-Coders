import React from 'react'
import styles from '../styles/Contact.module.css'

const contact = () => {
  const sendDetails = async(ev)=> {
    ev.preventDefault()
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const dob = document.getElementById('dob').value
    const contactObj = {
      name,age,email,dob
    }
    const response = await fetch('http://localhost:3000/api/postcontact', {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
       
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(contactObj), 
    });
    const data = await response.json()
    // console.log(data)
    if(data.success===true) {
      alert("data saved")
    }
  
  }
  return (
    <div className={styles.container}>
    <h1>Contact Us</h1>
    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label><br />
    <input type="text" class="form-control" id="name" name='name' aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label><br />
    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp" required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label><br />
    <input type='number' class="form-control" name='age' id="age" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Date of Birth</label><br />
    <input type='text' class="form-control" name='dob' id="dob" required/>
  </div>
  
  <button type="submit" className={styles.btn} onClick={sendDetails}>Submit</button>

    </div>
  )
}

export default contact
