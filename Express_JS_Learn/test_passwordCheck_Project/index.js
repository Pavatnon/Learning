import express from 'express';
import {fileURLToPath} from 'url';
import path, { dirname } from 'path'; 

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let pass = false;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const passmem = "Drakzone123";
    passmem === req.body.Password ? pass = true : pass = false; 
    if(pass){
        res.sendFile(path.join(__dirname + '/public/welcome.html'));
    }
    else{
        res.status(401);
        res.redirect('/');
    }
});

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server Started URL http://localhost:${port}`);
});
