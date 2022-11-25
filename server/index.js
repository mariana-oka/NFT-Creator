const express = require('express')
const helmet = require('helmet')
morgan = require('morgan')
const {
  nftHandlers,
  usersHandlers,
} = require('./handlers');

const PORT = 8000;

express()

  .use(express.json())
  .use(helmet())
  .use(morgan('tiny')) 

  .get('/hello', (req, res) => {
    res.status(200).json({status: 200, message: 'Hello World!'})
  })

  .get('/nfts', (req, res) => {
    const result = nftHandlers.findNfts(req.body);

    res.status(200).json(result);
  })

  .get('/nft/:nftId', (req, res) => {
    const result = nftHandlers.getNft(req.body);

    res.status(200).json(result);
  })

  .post('/nfts', (req, res) => {
    const result = nftHandlers.createNft(req.body);

    res.status(200).json(result);
  })

  .patch('/nfts', (req, res) => {
    const result = nftHandlers.updateNft(req.body);

    res.status(200).json(result);
  })

  .delete('/nfts', (req, res) => {
    const result = nftHandlers.deleteNft(req.body);

    res.status(200).json(result);
  })

  .get('/user/:userId', (req, res) => {
    const result = usersHandlers.getUser(req.body);

    res.status(200).json(result);
  })

  .post('/users', (req, res) => {
    const result = usersHandlers.createUser(req.body);

    res.status(200).json(result);
  })

  .patch('/users', (req, res) => {
    const result = usersHandlers.updateUser(req.body);

    res.status(200).json(result);
  })

  .delete('/users', (req, res) => {
    const result = usersHandlers.deleteUser(req.body);

    res.status(200).json(result);
  })

  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });