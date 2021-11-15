const initialState = [];

const popup = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POPUP":
      return [...state, payload];
    case "REMOVE_POPUP":
      return state.filter(popup => popup.id !== payload)
    default:
      return state;
  }
};

export default popup