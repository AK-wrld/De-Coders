// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=how-to-learn
import * as fs from 'fs'
export default function handler(req, res) {
  console.log(req.query.slug)
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=> {
    if(err) {
      res.status(500).json({Error: "Blog does not exist"})
    }
    // console.log(JSON.parse(data))
    const response = JSON.parse(data)
    res.status(200).json(response)
  })
}
