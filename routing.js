//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;

//routing
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/users', (req, res) => {
  res.send('Get user')
});
app.post('/users', (req, res) => {
  res.send('Post user')
});
app.put('/users', (req, res) => {
  res.send('Put user')
});
app.delete('/users', (req, res) => {
  res.send('Delete user')
});

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
