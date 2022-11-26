const { User } = require('../models')

const findUsers = async () => {
  const users = await User.findAll();

  return {
    users
  }
}

const getUser = async (userId) => {
  const user = await User.findOne(userId);
  
  return {
    user,
  };
}

const createUser = async (data) => {
  const user = User.create(data);

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

  const updatedUser = User.update(updatedUserDetails);

  return updatedUser;
}

const deleteUser = async (userId) => {
  const result = await User.delete(userId);
  
  return {
    success: result,
  }
}

module.exports = {
  findUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}