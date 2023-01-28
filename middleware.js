//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;

//middleware
const selfRemind = (req, res, next) => {
  console.log('Hei! have a good day<3.');
  next()
}
app.use(selfRemind);

//routing
app.get('/', (req, res) => {
  res.sendStatus(500)
  res.send('url dialihkan')
  res.redirect('/haha')
});
app.get('/haha', (req, res) => {
  res.send('Redirect adalah sebuah response method yang digunakan untuk mengalihkan suatu url ke url lain')
  res.sendStatus(200)
});
app.get('/users', (req, res) => {
  res.send('Gak boleh')
  res.sendStatus(404)
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
app.use('/', (req, res) =>{
  //res.send('404notfound');
  res.sendStatus(404)
  res.send('404notfound')
})

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
