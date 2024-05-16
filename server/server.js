const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const Port = 3000;

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"db"
    }
)

app.post("/signup",(req,res)=>{
    const{Name,Email,Password} = req.body;
    db.query("INSERT INTO signup (name,email,password) VALUES (?,?,?)",
    [Name,Email,Password],
    (err, result) => {
        if (err) {
            console.error('Error occurred during registration:', err);
            res.status(500).json({ error: 'Error occurred during registration' });
        } 
        else {
            console.log('User registered successfully');
            res.status(200).json({ message: 'User registered successfully' });
            // db.query("INSERT INTO session (username) VALUES (?)",[Name],(sessionErr, sessionResult)=>{
            //   if (sessionErr) {
            //     console.error('Error occurred while inserting username into session table:', sessionErr);
            //     res.status(500).json({ error: 'Error occurred during registration' });
            // } else {
            //     console.log('Username inserted into session table');
            //     res.status(200).json({ message: 'User registered successfully' });
            // }
            // });
        }
    }
    )
});

app.post("/login", (req, res) => {
  const { Email, password } = req.body;
  db.query(
    "SELECT * FROM signup WHERE email = ? AND password = ?",
    [Email, password],
    (err, results) => {
      if (err){
        console.error('Error executing query:', err);
        res.status(500).json({ success: false, message: 'An error occurred while processing your request.' });
        return;
      }
      if (results.length > 0){
        const userID = results[0].userID;
        const username = results[0].name;
        if (!username) {
          console.error('Username is NULL in signup table.');
          res.status(500).json({ success: false, message: 'An error occurred while processing your request.' });
          return;
        }
        db.query(
          "INSERT INTO session (username) VALUES (?)",
          [username],
          (err, insertResult) => {
            if (err) {
              console.error('Error inserting username into session table:', err);
              res.status(500).json({ success: false, message: 'An error occurred while processing your request.' });
              return;
            }
            res.status(200).json({ success: true, message: 'Login successful.', userID });
          }
        );
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password.' });
      }
    }
  );
});

app.get('/dashboard', (req, res) => {
  db.query('SELECT username FROM session WHERE id = 1', (error, results) => {
    if (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
  
    if (results.length > 0) {
      const username = results[0].username;
      res.status(200).json({ success: true, username: username });
    } else {
      res.status(404).json({ success: false, message: 'Username not found.' });
    }
  });
});

app.post('/logout',(req,res)=>{
  db.query("TRUNCATE TABLE session",(err,results)=>{
    if(err){
      console.log("Error truncating table:",err);
      res.status(500).json({success:false,message:'An error occured while processing your request.'});
      return;
    }
    res.status(200).json({success:true,message:'Logout successfully.'})
  });
})

app.post('/adminlogin',(req,res)=>{
  const {adminName,adPassword} = req.body;
  const query = "SELECT adminname from adminLog WHERE adminname = ? AND Password = ? ";
  db.query(query,
    [adminName, adPassword],
    (err,results) =>{
      if(err){
        console.error("Error fetching username",err);
        res.status(500).send("Internal Serverr Error");
      }
      if(results.length === 1){
        const adName = results[0].adminname;
        return res.status(200).json({ success: true, adName });
      }else{
        return res.status(401).json({success:false,message:"Invalid Credentials"});
      }
    }
  );
});



app.listen(Port,()=>{
    console.log(`Server running on PORT ${Port}`)
})