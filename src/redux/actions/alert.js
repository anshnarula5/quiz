export const setAlert = (result) => dispatch => {
    dispatch({type : "ALERT", payload : result})
}

export const setPopUp = (message, type) => dispatch => {
    const id = Math.random()
    dispatch({type: "SET_POPUP", payload: {type, message, id}})
    setTimeout(() => {
        dispatch({type : "REMOVE_POPUP", payload : id})
    }, 3000)
}