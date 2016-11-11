const seed_data = []
const time_map = {
  "Month": 30,
  "Week": 7,
  "Year": 365
}

const seedReducer = (state=seed_data, action) => {
  switch (action.type) {
    case "CREATE_SEED": {
      let newSeed = action.payload;
      newSeed.startTime = new Date();
      if (newSeed.time === "Month") {
        newSeed.endTime = new Date(new Date().setMonth(newSeed.startTime.getMonth() + 1));
      }
      else if (newSeed.time === "Week") {
        newSeed.endTime = new Date(new Date().setDate(newSeed.startTime.getDate() + 7));
      }
      else {
        newSeed.endTime = new Date(new Date().setYear(newSeed.startTime.getYear() + 1));
      }
      return [
        ...state,
        newSeed
      ]
    }
    case "EDIT_SEED": {
      console.log("Edit seed not implemented yet");
      return {
        ...state,
      }
    }
  }
  return state;
}

export { seedReducer };