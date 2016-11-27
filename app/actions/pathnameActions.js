export function changePath (newpath) {
  return {
    type: "CHANGE_PATH",
    payload: newpath
  }
}