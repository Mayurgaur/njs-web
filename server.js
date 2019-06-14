const express = require('express');
const app = express();
app.use(express.static(__dirname +'/public'));
app.get('/', (req , res) => {
  res.send('hello world I am Mayur');
});
app.get('/bad', (req , res) => {
  res.send({
    error: 'unable to fetch data'
  });
});
app.listen(3000);
