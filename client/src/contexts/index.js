import { createContext, useReducer } from 'react';
import appReducer from './reducer';
import { login, logout, findNfts, getNft, getUser, updateUser, createNft, deleteNFT } from './actions';

const initialState = {
  session: {
    userLoggedIn: window.sessionStorage.getItem('userLoggedIn') || false,
    walletAddress: window.sessionStorage.getItem('walletAddress') || false,
  },
  
  nfts: {},
  
  user: JSON.parse(
    window.sessionStorage.getItem('user')
  ) || {}
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch: {
          login: (data) => login(data, dispatch),

          logout: (data) => logout(data, dispatch),

          findNfts: (data) => findNfts(data, dispatch), 
        
          getNft: (data) => getNft(data, dispatch),

          createNft: (data) => createNft(data, dispatch),

          deleteNft: (data) => deleteNFT(data, dispatch),
  
          createUser: (data) => {},

          getUser: (data) => getUser(data, dispatch),

          updateUser: (data) => updateUser(data, dispatch),
    
          deleteUser: (data) => {},
      }}}
    >
      {children}
    </AppContext.Provider>
  )
};
