const path_data = {
  route: window.location.pathname.split('/')[1]
}

const pathnameReducer = (state=path_data, action) => {
   switch (action.type) {
    case "CHANGE_PATH": {
      let newpath = action.payload.split('/')[1]
      console.log("new path = " + newpath);
      return {
        ...state,
        route: newpath
      }
    }
  }
  return state;
}

export { pathnameReducer };