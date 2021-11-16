export const register = ({name, email}) => dispatch => {
    dispatch({type : "REGISTER", payload : {name, email, highscore : 0}})
}

export const logout = () => dispatch => {
    dispatch({type : "LOGOUT"})
}

export const fetch_users = (users) => dispatch => {
    dispatch({type : "USERS", payload : users})
}