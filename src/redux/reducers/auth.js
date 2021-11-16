const initialState = {users : [], user : null, loading : true}


const auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "REGISTER":
        return { ...state, user : payload , loading : false};
      case "LOGOUT":
        return {...state, user: null, loading : false};
      case "USERS":
        return {...state, users : payload, loading : false}
      default:
        return state;
    }
  };
  
  export default auth


