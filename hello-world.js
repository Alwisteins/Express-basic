//basic konfigurasi express
const express = require('express');
const app = express();
const port = 3000;

//routing
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//aktifasi server dan port
app.listen(3000, () => {
  console.log(`Server sedang berjalan pada port ${port}`)
});
