const initState = {
  authError:null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error", action.err);
      return {
        ...state,
        authError:'Login failed'
    }
    case "LOGIN_SUCCESS":
      console.log("login success", action.err);
      return {
        ...state,
        authError:null
    }
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
