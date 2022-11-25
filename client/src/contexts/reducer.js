const appReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN': {
      return {
        ...state,
        
        userLoggedIn: action.payload.userLoggedIn,
        walletAddress: action.payload.walletAddress,
      }
    }

    default: {
      return state;
    }
  }
}

export default appReducer;