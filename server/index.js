const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const {
  nftHandlers,
  usersHandlers,
} = require('./handlers');

const PORT = 8000;

express()
  .use(express.json())
  .use(helmet())
  .use(morgan('tiny')) 

  .use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
  })

  .get('/hello', (req, res) => {
    res.status(200).json({status: 200, message: 'Hello World!'})
  })

  .get('/nfts', async (req, res) => {
    try {
      const result = await nftHandlers.findNfts(req.query.userId);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });   
    }
  })

  .get('/nfts/:nftId', async (req, res) => {
    try {
      const result = await nftHandlers.getNft(req.params.nftId);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });   
    }
  })

  .post('/nfts', async (req, res) => {
    try {
      const result = await nftHandlers.createNft(req.body);
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });   
    }
  })

  .patch('/nfts', (req, res) => {
    const result = nftHandlers.updateNft(req.body);

    res.status(200).json(result);
  })

  .delete('/nfts', (req, res) => {
    const result = nftHandlers.deleteNft(req.body);

    res.status(200).json(result);
  })

  .get('/users', async (req, res) => {
    try {
      const result = await usersHandlers.findUsers();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });   
    }
  })

  .get('/users/:userId', async (req, res) => {
    try {
      const result = await usersHandlers.getUser(req.params.userId);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post('/users', async (req, res) => {
    try {
      const result = await usersHandlers.createUser(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });   
    }
  })

  .patch('/users', async (req, res) => {
    try {
      const result = await usersHandlers.updateUser(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  // delete individual user
  .delete('/users/:userId', async (req, res) => {
    try {
      const result = await usersHandlers.deleteUser(req.params.userId);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })


  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });