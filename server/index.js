const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const apiRouter = require('./routes/api');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '..', 'build')));
//app.use(
//  cors({
////    origin: 'http://localhost:80', // React domain
//    origin: '*',
//    credentials: true
//  })
//);
app.use(cors());
app.options('*', cors({credentials: true}));
app.use(express.json());
app.use(cookieParser());

// '/api' 라우터
app.use('/api', apiRouter);

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(9000, () => {
  console.log('SERVER LISTENING ON 9000');
});
