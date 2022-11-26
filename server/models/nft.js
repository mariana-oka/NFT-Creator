const { v4: uuid } = require('uuid');
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

  static async findAll() {
    const nfts = await db.nfts.find().toArray();

    return nfts;
  }

  static async findAllForUser(userId) {
    const nfts = await this.findAll();

    const userNfts = nfts.filter(nft => nft.userId === userId);

    return userNfts;
  }

  static async find(id) {
    const nft = await db.nfts.findOne({ id });

    if (!nft) {
      throw new Error(`Nft with id ${id} not found.`);
    }

    return nft;
  }

  static async create(data) {
    const nft = new this(data);

    await db.nfts.insertOne(nft);

    return nft;
  }
}

module.exports = Nft;