var express = require('express');
const https = require("https"),
fs = require("fs");

console.log('Example tls app start!');
console.log('read the secret :'+process.env.GREETING)

const keyFilePath = '/app/key.pem';
const certFilePath = '/app/cert.pem';

try {
  if (fs.existsSync(keyFilePath)) {
    console.log( keyFilePath + " exists.")
    //file exists
  }  else {
    console.log( keyFilePath + " doesn't exist.")
  }
} catch(err) {
  console.error(err)
}

try {
  if (fs.existsSync(certFilePath)) {
    console.log( certFilePath + " exists.")
    //file exists
  }  else {
    console.log( certFilePath + " doesn't exist.")
  }
} catch(err) {
  console.error(err)
}

var app = express();
app.get('/', function (req, res) {
  console.log('scone mode is :'+process.env.GREETING)
  res.send('Hello World!' + process.env.GREETING);
});

const options = {
  key: fs.readFileSync(keyFilePath),
  cert: fs.readFileSync(certFilePath)
};

var app = express();
https.createServer(options, app).listen(8443, function() {
  console.log('Example tls app listening on port 443!');
  console.log('scone mode is :'+process.env.GREETING)
});;
