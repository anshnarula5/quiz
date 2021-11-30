const initialState = false;

const toggle = (state = initialState, action) => {
  const { type,  } = action;
  switch (type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default toggle