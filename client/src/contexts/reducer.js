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

    case 'GET_NFT':
      return {
        ...state,

        nft: action.payload.nft,
  }

  //Create case for get user
  case 'GET_USER':
    return {
      ...state,

      user: action.payload.user,
    }
}}


export default appReducer;