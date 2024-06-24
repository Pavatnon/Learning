
import inquirer from 'inquirer';
import qr_image from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: "Type your URL: ",
    name: "URL"
  }])
  .then((answers) => {
    const inputURL = answers.URL;
    let qrcode = qr_image.image(inputURL);
    qrcode.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', inputURL, err => {
        if(err)throw err;
        console.log(`save URL conplete ${inputURL}`);
    });
  })
  


