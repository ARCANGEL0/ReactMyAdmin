const express = require("express")
const mysql = require("mysql");
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
 


app.get('/getDatabases', (req,res) => {
    var db = mysql.createConnection({

        user:app.settings.user,
        host:"localhost",
    
        password:app.settings.pass,
        database:"mysql"
    });
    
  
    
        db.connect();
       
        db.query('show databases;', function(err, databases) {
            if (!err) {
                res.send(JSON.stringify(databases));
            } else{
                res.send('Error while performing Query.');
            }
        });
        db.end();

})

app.get('/Database/:datab' , (req,res) => 
{
        const database = req.params.datab
        console.log('test')
        
        console.log(app.settings.user)
        console.log(app.settings.pass)


        var db = mysql.createConnection({

            user:app.settings.user,
            host:"localhost",
            multipleStatements: true,
            password:app.settings.pass,
            database:database
        });

        db.connect();



        db.query('show tables;',(err,tables)=>{
            if (!err) {
                res.send(JSON.stringify(tables));
            } else{
                res.send('Error while performing Query.');
            }
        })
        db.end();

        
})

app.post('/login',(req,res) => {

    

    
         let usr =  req.body.user
         let pss = req.body.pass 
          app.set('user',usr)
          app.set('pass', pss)

              
    var db = mysql.createConnection({

        user:app.settings.user,
        host:"localhost",
    
        password:app.settings.pass,
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