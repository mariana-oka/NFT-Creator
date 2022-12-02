const { Nft } = require('../models');
const { nftPortClient } = require('../clients');

const findNfts = async (userId) => {
  let nfts;

  if (userId) {
    nfts = await Nft.findAllForUser(userId);
  } else {
    nfts = await Nft.findAll();
  }

  return nfts;
}

//Create a new async function to get the individual NFT by ID from the database
const getNft = async (id) => {
  const nft = await Nft.find(id);
  return nft;
  console.log (nft)
}

const createNft = async (data) => {
  const {
    name,
    description, 
    userWallet, 
    file,
    mediaType,
    userId,
  } = data;

  const { 
    contract_address: contractAddress,
    transaction_hash: transactionHash,
    transaction_external_url: blockExplorerUrl,
  } = await nftPortClient.mint({  name, description, userWallet, file });

  const tokenId = await nftPortClient.getTokenId({ transactionHash });

  const uri = await nftPortClient.getUri({ tokenId, contractAddress });

  const nft = await Nft.create({
    blockExplorerUrl,
    name, 
    description,
    userWallet,
    userWallet, 
    mediaType, 
    userId, 
    tokenId, 
    uri,
    contractAddress,
  });

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