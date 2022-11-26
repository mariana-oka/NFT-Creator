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