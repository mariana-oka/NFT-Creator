const { Nft } = require('../models');

const findNfts = () => {
  return {
    success: true,
  }
}

const getNft = () => {
  return {
    success: true,
  }
}

const createNft = async (data) => {
  const nft = await Nft.create(data);

  return nft;
}

const updateNft = () => {
  return {
    success: true,
  }
}

const deleteNft = () => {
  return {
    success: true,
  }
}

module.exports = {
  getNft,
  findNfts,

  createNft,
  updateNft,
  deleteNft
}