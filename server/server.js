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
        }
    }
    )
});

app.post('/appoinment',(req,res)=>{
  const{name,age,gender,mobile,address} = req.body;
  const query = "INSERT INTO appointment (name,age,gender,mobNum,address) VALUES (?,?,?,?,?)";
  db.query(query,[name,age,gender,mobile,address],(err,result)=>{
    if(err){
      console.error("Error fetching appoinment data",err);
      res.status(500).json({error:"Error inserting data"});
    }else{
      console.log("Appoinment made successfully");
      res.status(200).json({ message: 'Appoinment made  successfully'})
    }
  });
})

app.post('/admin/appointment/delete', (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM appointment WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting appointment", err);
      res.status(500).json({ error: "Error deleting appointment" });
      return;
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  });
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

app.get("/admin/dashboard",(req,res)=>{
  const query = "SELECT * FROM appointment"
  db.query(query,(error,result)=>{
    if(error){
      console.error("Error fetching Details of Appoinment",error);
      res.status(500).json({error:"Error fetching appoinment details"});
      return;
    }
    res.status(200).json(result);

  });
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