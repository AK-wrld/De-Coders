import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = (props) => {
  // now instead of using useState and useEffect to fetch data, we are using server side props
  const [blogs, getBlogs] = useState(props.data)
  console.log(props)
  // const fetchBlogs = async () => {
  //   const response = await fetch('http://localhost:3000/api/blogs')
  //   const data = await response.json()
  //   // console.log(data)
  //   getBlogs(data)
  // }
  // useEffect(() => {
  //   fetchBlogs()
  // }, [])
  return (
    
    <div className={styles.blogs}>
      {/* {props} */}
      {
        blogs ? blogs.map((el, index) => {

          return <div className={styles.card} key={index}>
            <Link href={`/blogpost/${el.slug}`} className={styles.blog}>
              <h3 className="blogTitle">
                {el.title}
              </h3>
              <p> {el.content.slice(0,100)}...</p>
              <p className="blogItem">
                By- {el.author}
              </p>
            </Link>
          </div>
        }) : ""
      }

    </div>

  )
}
export async function getServerSideProps(context) {
 
    const response = await fetch('http://localhost:3000/api/blogs')
    const data = await response.json()
    console.log(data)
    // getBlogs(data)
  
  return { props: { data } };
};
export default blog
