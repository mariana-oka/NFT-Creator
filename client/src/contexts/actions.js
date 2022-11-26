import { loginModal } from '../lib/web3';

export const login = async (data, dispatch) => {
  const [ walletAddress ] = await loginModal.enable();

  // make backend call to make user
  // send wallt address

  window.localStorage.setItem('walletAddress', walletAddress);
  window.localStorage.setItem('userLoggedIn', true);

  dispatch({
    type: 'LOGIN',
    payload: {
      userLoggedIn: true,
      walletAddress,
    },
  })
}