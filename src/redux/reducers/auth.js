const initialState = {users : [], user : null}


const auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "REGISTER":
        return { ...state, user : payload };
      case "LOGOUT":
        return { ...state, user : null };
      default:
        return state;
    }
  };
  
  export default auth


