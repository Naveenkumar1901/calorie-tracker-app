import * as actionTypes from "./loginTypes";

const INITIAL_STATE = {
    userName: "",
    password: "",
    isAuthenticated: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                userName: action.payload.userName,
                password: action.payload.password
            };
        case actionTypes.AUTHENTICATED:
            return {
                isAuthenticated: action.payload.isAuthenticated
            };
        case actionTypes.LOGOUT:
            return {
                userName: "",
                password: "",
                isAuthenticated: false
            };
        default:
            return state;
    };
};

export default loginReducer;