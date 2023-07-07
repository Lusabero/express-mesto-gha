const routerUsers = require('express').Router();
const {
  getUsers, getUser, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:userId', getUser);
routerUsers.post('/users', createUser);
routerUsers.patch('/users/me', updateUser);
routerUsers.patch('/users/me/avatar', updateAvatar);

module.exports = routerUsers;
