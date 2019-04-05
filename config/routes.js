const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');


const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  let user = req.body;
  // (user.username && user.password) {
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

    db('users')
    .insert(user)
    .then(saved => {
      const [id] = saved;
      db('users')
      .where({ id })
      .first()
      .then(userReg => {
        res.status(201).json(userReg)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    })
    .catch(err => {
      res.status(500).json({ message: "Error registering, try again"})
    })
  //}
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
