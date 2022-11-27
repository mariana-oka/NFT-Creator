const appReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN': 
      return {
        ...state,
        
        session: {
          userLoggedIn: action.payload.userLoggedIn,
          walletAddress: action.payload.walletAddress,
        },

        user: action.payload.user,
      }
    case 'LOGOUT':
      return {
        ...state,

        session: {
          userLoggedIn: action.payload.userLoggedIn,
          walletAddress: action.payload.walletAddress,
        },

        user: {},
      }

    case 'FIND_NFTS': 
      return {
        ...state,

        nfts: action.payload.nfts,
      }

    default: {
      return state;
    }
  }
}

export default appReducer;