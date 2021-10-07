const express = require("express")
const mysql = require("mysql");
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())


app.post('/login',(req,res) => {
        const user =  req.body.user
        const pass = req.body.pass 
        
         const db = mysql.createConnection({
             user:user,
             host:"localhost",
        
             password:pass,
             database:"mysql"
         });
        
         db.connect((err)=> {
             if(!err)
             {
                 res.send({connected: true});
             }
             else
             {
                 res.send({connected: false});
             }
         })

})
app.listen(800,()=>{
    console.log("running");
})