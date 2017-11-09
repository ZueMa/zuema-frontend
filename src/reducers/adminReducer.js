export default function adminReducer(state = { username: '' }, action) {
    if(action.type === 'ADMIN_LOGIN') {
      return { 
          username: action.payload.username
      }
    }
    return state;
  }