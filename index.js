const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
host: "sql12.freesqldatabase.com",
user:"sql12627434",
password:"3UieZefCyl",
database:"sql12627434",
port:3308
});

app.post("/save",(req,res)=>{
let data = [req.body.name,req.body.company,req.body.pkg];
let sql = "insert into student values(?,?,?)";
con.query(sql,data,(err,result)=>{
if (err) 	res.send(err);
else		res.send(result);
});
});


app.listen(9999,()=>{ console.log("ready to serve @ 9999 " )});