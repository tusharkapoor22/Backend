const express = require('express')
const format = require('date-format')
const app = express()

const PORT = 4000  || process.env.PORT

app.get("/", (req,res) =>{
    res.status(200).send("Hello World");
});

app.get("/api/v1/instagram", (req, res) =>{
    const instaSocial = {
        username:"tusharkapoor22",
        followers:200,
        follows:210,
        date: format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json({instaSocial});
});
app.get("/api/v1/facebook", (req, res) =>{
    const instaSocial = {
        username:"tusharkapoorpage",
        followers:400,
        follows:500,
        date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json({instaSocial});
});
app.get("/api/v1/linkedin", (req, res) =>{
    const instaSocial = {
        username:"tusharkapoor",
        followers:20,
        follows:50,
        date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json({instaSocial});
});
app.get("/api/v1/:token",(req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});