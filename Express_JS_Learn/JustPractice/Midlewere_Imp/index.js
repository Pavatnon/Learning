import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const _pathdir = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(_pathdir + '/Public/index.html');
});

app.post('/submit', (req,res) => {
    console.log(req.body);
    
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is  started port: ${port}`);
});