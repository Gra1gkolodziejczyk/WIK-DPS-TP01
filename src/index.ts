import express from 'express';
import os from 'os';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a web page!');
})

app.get('/ping', (req, res) => {
  res.send(req.hostname);
  console.log(os.hostname());
})

app.get('/*', (req, res) => {
  res.send('This is a PAGE 404');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})