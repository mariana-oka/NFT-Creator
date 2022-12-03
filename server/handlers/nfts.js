const { Nft } = require('../models');
const { nftPortClient } = require('../clients');

const findNfts = async (userId) => {
  let nfts;

  if (userId) {
    nfts = await Nft.findAllForUser(userId);

    await _enrichNfts(nfts);
  } else {
    nfts = await Nft.findAll();

    await _enrichNfts(nfts);
  }

  return nfts;
}

const _enrichNfts = async (nfts) => {
  const enrichedNfts = nfts.filter(nft => nft.uri);
  const unenrichedNfts = nfts.filter(nft => !nft.uri);

  for (const unenrichedNft of unenrichedNfts) {
    const { contractAddress, tokenId } = unenrichedNft;

    const uri = await nftPortClient.getUri({ contractAddress, tokenId });

    unenrichedNft.uri = uri;

    await Nft.update(unenrichedNft);
  }

  return [
    ...enrichedNfts,
    ...unenrichedNfts
  ]
}

//Create a new async function to get the individual NFT by ID from the database
const getNft = async (id) => {
  const nft = await Nft.find(id);
  return nft;
}

const createNft = async (data) => {
  const {
    contractAddress,
    transactionHash,
    blockExplorerUrl,
    walletAddress, 
    name,
    description,
    userId,
    mediaType = 'image'
  } = data;

  const tokenId = await nftPortClient.getTokenId({ transactionHash });

  const uri = await nftPortClient.getUri({ tokenId, contractAddress });

  const nft = await Nft.create({
    blockExplorerUrl,
    name, 
    userWallet: walletAddress, 
    description,
    mediaType, 
    userId, 
    tokenId, 
    uri,
    contractAddress,
    transactionHash,
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