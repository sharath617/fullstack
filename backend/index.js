const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/getdata', (req,res)=>{

    res.send('Sharath');
});

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});