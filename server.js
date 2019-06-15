const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname +'/public'));
app.get('/', (req , res) => {
  res.send('hello world I am Mayur');
});
app.get('/bad', (req , res) => {
  res.send({
    error: 'unable to fetch data'
  });
});
app.listen(port, () =>{
  console.log(`Server is up on ${port}`);
});
