//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./user-route');

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

//routing

//Halaman Home
app.get('/', (req, res) => {
  const iam = {
    id: 1,
    name: "alwi wahyu waludin",
    nickname: "alwisteins"
  };
  res.render('pages/home', { iam })
});

//Halaman About
app.get('/about', (req, res) => {
  res.render('pages/about')
});

//route untuk menghandle path '/users'
app.use(usersRouter);

app.use('/', (req, res) =>{
  res.send('404notfound')
  //res.sendStatus(404)
})

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
