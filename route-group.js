//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;

//routing
app.get('/', (req, res) => {
  res.redirect('/haha');
  res.sendStatus(500)
});
app.get('/haha', (req, res) => {
  res.send('Redirect adalah sebuah response method yang digunakan untuk mengalihkan suatu url ke url lain');
  res.sendStatus(200);
});
app.route('/users')
 .get((req, res) => {
  res.send('Get user');
  res.sendStatus(404);
})
 .post((req, res) => {
  res.send('Post user')
});

//route parameter
app.route('/users/:id')
 .put()(req, res) => {
  const id = req.params;
  res.send(id)
})
 .delete('/users/:id', (req, res) => {
  res.send(`user menghapus id: ${req.params.id}`)
});

app.use('/', (req, res) =>{
  res.send('404notfound');
  res.sendStatus(404);
})

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
