const { v4: uuid } = require('uuid');
const { nftPortClient } = require('../clients');
const db = require('../db');

class Nft {
  constructor(data) {
    this.id = `NF-${uuid()}`;
    this.createdAt = new Date();
    this.userId = data.userId;
    this.userWallet = data.userWallet;

    this.tokenId = data.tokenId;
    this.contractAddress = data.contractAddress;
    this.uri = data.uri;

    this.blockExplorerUrl = data.blockExplorerUrl;
    this.transactionHash = data.transactionHash;

    this.name = data.name;
    this.description = data.description;
    this.mediaType = data.mediaType;
  }

  static async create(data) {
    const { name, description, userWallet, file, mediaType, userId } = data;

    const { 
      contract_address: contractAddress,
      transaction_hash: transactionHash,
      transaction_external_url: blockExplorerUrl,
    } = await nftPortClient.mint({ name, description, userWallet, file });

    const tokenId = await nftPortClient.getTokenId({ transactionHash });

    const uri = await nftPortClient.getUri({ tokenId, contractAddress });
    
    const nft = new this({
      userId,
      userWallet,

      name,
      description,
      mediaType,
      
      tokenId,
      contractAddress,
      uri,

      blockExplorerUrl,
      transactionHash,
    });

    await db.nfts.insertOne(nft);

    return nft;
  }
}

module.exports = Nft;