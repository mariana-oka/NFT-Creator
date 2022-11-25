import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const fm = new Fortmatic(process.env.REACT_APP_FORTMATIC_API_KEY_PRODUCTION);
window.web3 = new Web3(fm.getProvider());

const loginModal = window.web3.currentProvider;
const checkLoginStatus = window.web3.eth.getAccounts();

export { 
  checkLoginStatus,
  loginModal 
};