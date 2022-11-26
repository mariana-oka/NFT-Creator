const { v4: uuid } = require('uuid')
const db = require('../db')

class User {
  constructor(data) {
    this.id = `US-${uuid()}`;
    this.createdAt = new Date();

    this.username = data.username;
    this.bio = data.bio;
    this.avatarUrl = data.avatarUrl;
    this.portfolioLink = data.portfolioLink;
    this.coverPhotoUrl = data.coverPhotoUrl;

    this.walletAddress = data.walletAddress;
  }

  async validate() {
    if (!this.walletAddress) {
      throw new Error('User must have a wallet address');
    }
    
    const existingUser = await db.users.findOne({ username: this.username });
    const existingUsername = existingUser && !existingUser.id === this.id;
    
    if (existingUsername) {
      throw new Error('Username already exists');
    }
  }
}

module.exports = User;