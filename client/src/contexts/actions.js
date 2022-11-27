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
  // const nfts = await client.api.getAssets();

  // dispatch({
  //   type: 'FIND_NFTS',
  //   payload: {
  //     nfts,
  //   },
  // })
}

export const getNft = async (data, dispatch) => {
  // const nft = await client.api.getAsset(data);

  // dispatch({
  //   type: 'GET_NFT',
  //   payload: {
  //     nft,
  //   },
  // })
}