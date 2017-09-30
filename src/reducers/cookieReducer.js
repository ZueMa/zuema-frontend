
export default function cookieReducer(state = { id:'',type:'' }, action) {
    if(action.type === 'COOKIE') {
      return {
          id: action.user_id,
          type: action.user_type,
        }
    }
    return state;
  }