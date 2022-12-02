import { loginModal, fortmatic } from '../lib/web3';

const BASE_URL = process.env.REACT_APP_SEVER_URL_DEVELOPMENT;

export const login = async (data, dispatch) => {
  const [ walletAddress ] = await loginModal.enable();

  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ walletAddress }),
  });

  const user = await response.json();

  window.sessionStorage.setItem('walletAddress', walletAddress);
  window.sessionStorage.setItem('userLoggedIn', true);
  window.sessionStorage.setItem('user', JSON.stringify(user));

  dispatch({
    type: 'LOGIN',
    payload: {
      userLoggedIn: true,
      walletAddress,
      user,
    },
  })
}

export const logout = async (data, dispatch) => {
  await fortmatic.user.logout();

  window.sessionStorage.removeItem('walletAddress'); 
  window.sessionStorage.removeItem('userLoggedIn');

  dispatch({
    type: 'LOGOUT',
    payload: {
      userLoggedIn: false,
      walletAddress: null,
    },
  })
}

export const findNfts = async (data, dispatch) => {
  const response = await fetch(`${BASE_URL}/nfts`);

  const nfts = await response.json();

  dispatch({
    type: 'FIND_NFTS',
    payload: {
      nfts,
    },
  })

  return nfts;
}

export const getNft = async (data, dispatch) => {
  const response = await fetch(`${BASE_URL}/nfts/${data.id}`);
  const nft = await response.json();

  dispatch({
    type: 'GET_NFT',
    payload: {
      nft,
    },
  })

  return nft;
} 

  // Create a new NFT
export const createNft = async (data, dispatch) => {

  const response = await fetch(`${BASE_URL}/nfts`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const nft = await response.json();

  dispatch({
    type: 'CREATE_NFT',
    payload: {
      nft,
    },
  })

  return nft;
}

  // Get user info 
  export const getUser = async (data, dispatch) => {
 
    const response = await fetch(`${BASE_URL}/users/${data.id}`);
    const user = await response.json();

    dispatch({
      type: 'GET_USER',
      payload: {
        user,
      },
    })

    return user;
  }

  // Delete an NFT

