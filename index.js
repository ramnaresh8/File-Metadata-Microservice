var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

var multer = require("multer");
const { send } = require('express/lib/response');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req,res) => {
  res.json({
    'name' : req.file.originalname,
    'type' : req.file.mimetype,
    'size' : req.file.size
  })
});

//404 not found
app.use((req, res, next) => {
  res.status(404);
  res.type('txt').send('Not found');
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
