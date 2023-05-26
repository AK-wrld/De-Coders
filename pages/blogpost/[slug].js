import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Blopost.module.css'
const slug = (props) => {
    // const router = useRouter();
    // const {slug} = router.query
    // console.log(slug)
    const [blog,setBlog] = useState(props.data)
    // const fetchBlog = async()=> {
    //   const response= await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    //   const data = await response.json()
    //   // console.log(data)
    //   setBlog(data)
    // }
    // useEffect(()=> {
    //   fetchBlog()
    // },[slug])
    // another way of waiting for router slug
    // useEffect(()=> {
    //   if(!router.isReady) return;
    //   fetchBlog()
    // },[router.isReady])
  return (
    blog && <>
    <div className={styles.main}>
    <h1 className={styles.title}>Blogpost : {blog.title}</h1> 
    
    <p className={styles.content}>{blog.content}</p>
    </div>
     
    </>
  )
}
export async function getServerSideProps(context) {
//  context object contains a query or a params which contains our slug. can use both contxt.params or context.query
// console.log(context)
  const {slug} = context.query
  
  const response= await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const data = await response.json()
return { props: { data } };
};

export default slug
