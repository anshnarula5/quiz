const initialState = {};

const alert = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALERT":
      return { ...state, payload };
    default:
      return state;
  }
};

export default alert