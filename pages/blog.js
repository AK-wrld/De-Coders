import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
const blog = (props) => {
  // console.log(props.data.blogObj)
  // now instead of using useState and useEffect to fetch data, we are using server side props
  const [blogs, getBlogs] = useState(props.data.blogObj)
  const [count,setCount] = useState(2)
  // console.log(props.data.totalLength)
  const fetchData = async()=> {
    // console.log("fetch data running")
    const response = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`)
    const data = await response.json()
    // console.log(data)
    setCount(count+2)
    // console.log(count)
    getBlogs(blogs.concat(data.blogObj))
  }
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
    <>
    

    <InfiniteScroll
  dataLength={blogs.length} 
  next={fetchData}
  hasMore={count<props.data.totalLength}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality

>
<div className={styles.blogs}>
      {/* {props} */}
      {
        blogs ? blogs.map((el, index) => {

          return <div className={styles.card} key={el.slug}>
            <Link href={`/blogpost/${el.slug}`} className={styles.blog}>
              <h3 className="blogTitle">
                {el.title}
              </h3>
              <p> {el.content?el.content.slice(0,100):""}...</p>
              <p className="blogItem">
                By- {el.author}
              </p>
            </Link>
          </div>
        }) : ""
      }

    </div>
</InfiniteScroll>
    
   
    </>

  )
}
export async function getServerSideProps(context) {
  // console.log("getserverside props running")
    const response = await fetch(`http://localhost:3000/api/blogs?count=${15}`)
    const data = await response.json()
    // console.log(data)
    // getBlogs(data)
  
  return { props: { data } };
};
export default blog
