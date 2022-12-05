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

      //Create case for get user
    case 'GET_USER':
    return {
      ...state,

      user: action.payload.user,
    }

    case 'CREATE_NFT': 
      return {
        ...state,
        nft: action.payload.nft
      }

    case 'GET_NFT':
      return {
        ...state,

        nft: action.payload.nft,
    }

    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload.user
      }

      // add a delete nft case 

    case 'DELETE_NFT':
      const nfts = state?.nfts?.filter(nft => nft.id !== action.payload.nft.id)

      return {
        ...state,
        nfts,
        nft: {}
      }

    default: {
      return state;
    }
}}


export default appReducer;