import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      const {name,age,dob,email} = req.body
      const userData = {
        name,age,dob,email
      }
      const data = JSON.stringify(userData)
      const fileNumber = await fs.promises.readdir('contactdata');
      fs.promises.writeFile(`contactdata/${fileNumber.length+1}.json`,data,err=>{
        if(err) {
      res.status(500).json({success:false, error:"Internal server error"})
            
        }
      })
      res.status(200).json({success:true ,message:"Details saved successfully"})

    } else {
      // Handle any other HTTP method
      res.status(200).send("Not a post request")
    }
  }