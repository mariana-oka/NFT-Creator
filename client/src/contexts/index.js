import { createContext, useReducer } from 'react';
import appReducer from './reducer';
import { login, logout, findNfts, getNft, getUser } from './actions';

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

          createNft: (data) => {},

          deleteNft: (data) => {},
  
          createUser: (data) => {},

          getUser: (data) => getUser(data, dispatch),

          updateUser: (data) => {},
    
          deleteUser: (data) => {},
      }}}
    >
      {children}
    </AppContext.Provider>
  )
};
