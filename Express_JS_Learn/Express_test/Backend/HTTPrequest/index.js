import express from "express";

const app = express();
const port = 3000;

app.get('/', (req,res)=> {
    res.send('<h1>Hello</h1>');
});
app.get('/contect', (req,res)=> {
    res.send('<h1>+66000000000</h1>');
});
app.get('/about_me', (req,res)=> {
    res.send('<h1>my name is non</h1>');
});


app.listen(port, ()=>{
    console.log(`Server is started port: ${port}`);
});