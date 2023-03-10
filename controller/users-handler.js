const { users } = require('../model/users.js');
const fs = require('fs');
const nanoid = require('nanoid');

//handler halaman register
const register = (req, res) => {
    res.render('pages/users/register')
}

//handler method post pada url users
const create = (req, res) => {
   const id = users.length +1;
   const name = req.body.name;
   const email = req.body.email;

      users.push({
          id,
          name,
          email
      });

      res.json({
        status: true,
        message: 'Data berhasil ditambahkan',
        data: users,
        method: req.method,
        url: req.url
      })
      res.sendStatus(200)
}

//handler method get pada url users
const readAll = (req, res) => {
    res.render('pages/users/index', {users})
//res.render('pages/users/index', {users})
};

//handler method get pada url users id
const readById = (req, res) => {
   const id = req.params.id;                                       const user = users.find((users) => users.id == id);

   if(!user){
     res.json({
       status: false,
       message: `user dengan id ${id} tidak ditemukan`
     })
     //res.sendStatus(404)
   }
   else{
     res.json({
       status: true,
       data: user,
       method: req.method,
       url: req.body
     })
     res.sendStatus(200)
     //res.send(id)
     //res.json(users);
   }
 };

//handler method update pada url users id
const updateById = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const index = users.findIndex((users) => users.id == id);

  if(index !== -1){
    users[index] = {
      ...users[index],
      name,
      email,
    }
    res.json({
      status: true,
      message: `user dengan id ${id} berhasil diperbarui`,
      data: users,
      method: req.method,
      url: req.url
    });
    res.sendStatus(200)
  }
   else{
     res.json({
       status: false,
       message: `user dengan id ${id} tidak ditemukan`
     })
     res.sendStatus(404)
   }
}

//handler method delete pada url users id
const deleteById = (req, res) => {
   const id = req.params.id;
   const index = users.findIndex((users) => users.id === id);

   if(index - 1){
     users.splice(index, 1);
     res.json({
       status: true,
       message: `user dengan id ${id} berhasil dihapus`,
       data: users,
       method: req.method,
       url: req.url
     })
     res.sendStatus(200)
   }
   else{
    res.json({
      status: false,
      message: `user dengan id ${id} tidak ditemukan`
    })
    res.sendStatus(404)
   }
}

module.exports = {
  register, create, readAll, readById, updateById, deleteById
};
