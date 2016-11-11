export function createSeed(name, goal, time) {
  return {
    type: "CREATE_SEED",
    payload: {
      name: name,
      goal: goal,
      time: time
    }
  }
}
export function editSeed(name, goal, time) {
  return {
    type: "EDIT_SEED",
    payload: {
      name: name,
      goal: goal,
      time: time
    }
  }
}