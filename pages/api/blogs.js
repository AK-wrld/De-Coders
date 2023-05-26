import * as fs from 'fs'
// http://localhost:3000/api/blogs
export default function handler(req, res) {
  fs.readdir(`blogdata`,(err,data)=> {
    if(err) {
      res.status(500).json({Error: "Internal server error"})
    }
    // console.log(req.query.count)
    const totalLength = data.length
    const lessdata = data.slice(0,req.query.count)
    // console.log(JSON.parse(data))
    // console.log(lessdata)
    const blogObj = []
    lessdata.forEach((blogPage)=> {
        // console.log(blogPage)
        const newBlog = fs.readFileSync(`blogdata/${blogPage}`,'utf-8')
        blogObj.push(JSON.parse(newBlog))
    })
    // console.log(blogObj)
    res.status(200).json({blogObj,totalLength})
  })
}
