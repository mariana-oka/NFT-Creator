const db = require('../db');
const { User } = require('../models')

const findUsers = async () => {
  const users = await db.users.find().toArray();

  return {
    users
  }
}

const getUser = async (userId) => {
  const user = await db.users.findOne({ id: userId });
  
  return {
    user,
  };
}

const createUser = async (data) => {
  const user = new User(data);
  await user.validate();

  await db.users.insertOne(data);

  return user;
}

const updateUser = async (data) => {
  const user = await db.users.findOne({ id: data.id });

  if (!user) {
    throw new Error('User not found');
  }

  const updatedUserDetails = {
    // Items you can't update
    id: user.id,
    createdAt: user.createdAt,
    walletAddress: user.walletAddress,
    // Items you can update
    username: data.username,
    bio: data.bio,
    portfolioLink: data.portfolioLink,
    avatarUrl: data.avatarUrl,
    coverPhotoUrl: data.coverPhotoUrl,
  }

  const updatedUser = new User(updatedUserDetails);
  await updatedUser.validate();

  await db.users.updateOne(
    { id: user.id },
    { $set: updatedUserDetails }
  )

  return updatedUser;
}

const deleteUser = async (userId) => {
  const user = await db.users.findOne({ id: userId });
  
  if (!user) {
    throw new Error('User not found');
  }

  await db.users.deleteOne({ id: userId })

  return {
    success: true,
  }
}

module.exports = {
  findUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}