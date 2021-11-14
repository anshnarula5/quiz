export const setAlert = (result) => dispatch => {
    dispatch({type : "ALERT", payload : result})
}