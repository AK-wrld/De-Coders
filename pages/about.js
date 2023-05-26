import React from 'react'

const about = () => {
  return (
    <>
    <style jsx>
    {
      `
      .myDiv {
        width:50%;
        margin:auto;
        padding-top:2rem;

      }
      .mySpan {
        font-weight:bold;
        color:blue;
      }
      .title {
        padding: 2rem 0rem;
        text-align:center;
      }
      .services {
        padding-top:2rem;
      }
      .ul {
        padding-top:1rem;
      }
      .contact {
        padding-top:2rem;
      }
      `
    }
    </style>
    <div className='myDiv'>
      <h1 className='title'>About De-Coders</h1>
      <h2 className='intro'>Introduction</h2>
      An amazing blog website where a community of passionate coders come forward and share their experience, try and find solutions for  
      bugs and get the latest tech news. Our aim is to build a community where everyone can join and interact with one another and share their
      knowledge. This project initiative was taken by Apurba Koley and was made using nextJS. Huge shoutout to <span className='mySpan'>'Code with Harry'</span>  for the project
      inspiration.
      <h2 className='services'>Services Offered</h2>
      <ul className='ul'>
        <li>Tech Blogs</li>
        <li>Community of problem solvers</li>
        <li>open source contributers</li>
      </ul>
      <h2 className='contact'>Contact Us</h2>
      <ul className='ul'>
        <li>Name: Apurba Koley</li>
        <li>Phone Number: 8929988954</li>
        <li>Email: apurbakoley43@gmail.com</li>
      </ul>
    </div>
    </>
    
  )
}

export default about
