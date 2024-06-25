import express from 'express';
import {fileURLToPath} from 'url';
import path, { dirname } from 'path';

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static(path.join('view')));

app.get('/', (req, res) => {
    res.render((path.join(_dirname + '/view/index.ejs')), {
        Goodday:"GooddayText",
        Badday:"BaddayText"
    });
});


app.listen(port, err =>{
    if(err) throw err;
    console.log(`Server Started http://localhost:${port}`);
})
