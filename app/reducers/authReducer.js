const auth_data = {
  logged_in: false
}

const authReducer = (state=auth_data, action) => {
   switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        logged_in: true
      }
    }
    case "LOGOUT": {
      return {
        ...state,
        logged_in: false
      }
    }
  }
  return state;
}

export { authReducer };