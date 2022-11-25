import { createContext, useReducer } from 'react';
import appReducer from './reducer';
import { login } from './actions';

const initialState = {
  userLoggedIn: window.localStorage.getItem('userLoggedIn') || false,
  walletAddress: window.localStorage.getItem('walletAddress') || false,
  
  nfts: {},
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
          logout: () => {},

          findNfts: () => {},
          getNft: () => {},
          createNft: () => {},
          updateNft: () => {},
          deleteNft: () => {},

          createUser: () => {},
          updateUser: () => {},
          deleteUser: () => {},
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
};
