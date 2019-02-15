const initState = {
  userData: {}
}

export default function rootReducer(state=initState, action) {
  switch(action.type) {
    case 'USER_DATA': {
      return {
        ...state,
        userData: action.data
      }
    }
    default: 
    return state;
  }
}