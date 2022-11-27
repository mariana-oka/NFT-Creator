import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const fortmatic = new Fortmatic(process.env.REACT_APP_FORTMATIC_API_KEY_PRODUCTION);
window.web3 = new Web3(fortmatic.getProvider());

const loginModal = window.web3.currentProvider;

export { 
  loginModal,
  fortmatic,
};