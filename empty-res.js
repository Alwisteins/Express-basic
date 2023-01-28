//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;

//routing
app.get('/', (req, res) => {
  res.end()
});
app.get('/users', (req, res) => {
  res.send('Get user')
});
app.post('/users', (req, res) => {
  res.send('Post user')
});
//route parameter
app.put('/users/:id', (req, res) => {
  const id = req.params;
  res.send(id)
});
app.delete('/users/:id', (req, res) => {
  res.send(`user menghapus id: ${req.params.id}`)
});

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
