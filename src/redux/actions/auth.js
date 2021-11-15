export const register = ({name, email}) => dispatch => {
    dispatch({type : "REGISTER", payload : {name, email}})
}