import * as fs from 'fs'
// http://localhost:3000/api/blogs
export default function handler(req, res) {
  fs.readdir(`blogdata`,(err,data)=> {
    if(err) {
      res.status(500).json({Error: "Internal server error"})
    }
    // console.log(JSON.parse(data))
    const blogObj = []
    data.forEach((blogPage)=> {
        // console.log(blogPage)
        const newBlog = fs.readFileSync(`blogdata/${blogPage}`,'utf-8')
        blogObj.push(JSON.parse(newBlog))
    })
    // console.log(blogObj)
    res.status(200).json(blogObj)
  })
}
