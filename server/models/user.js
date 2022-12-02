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

  static async findAll() {
    const users = await db.users.find().toArray();

    return users;
  }

  static async findOne(id) {
    const user = await db.users.findOne({id});

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  static async findBy(data) {
    const user = await db.users.findOne(data);

    return user;
  }

  static async create(data) {
    const user = new this(data);
    await user.validate();

    await db.users.insertOne(user);

    return user;
  }

  static async update(data) {
    const user = new this(data);
    await user.validate();

    await db.users.updateOne(
      { id: user.id },
      { $set: user }
    )
    
    return user;
  }

  static async delete(id) {
    const user = await this.findOne(id);
  
    await db.users.deleteOne({ id: user.id });

    return true;
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