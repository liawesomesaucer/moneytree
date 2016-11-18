import axios from 'axios';

const seed_data = []
const time_map = {
  "Month": 30,
  "Week": 7,
  "Year": 365
}
const seed_route = '/api/seeds';

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
        newSeed.endTime = new Date(new Date().setFullYear(newSeed.startTime.getFullYear() + 1));
      }
      if (!newSeed.posted) {
        newSeed.posted = true;
        axios.post(seed_route + '/add', newSeed)
        .then(function(res) {
          console.log("Updated seed backend");
        })
        .catch(function(err) {
          console.log(err);
        });
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
    case "DELETE_SEED": {
      let res = []
      state.forEach(function(val, i) {
        if (val.name != action.payload) {
          res.push(val);
        }
      });
      axios.get(seed_route + '/delete?name=' + action.payload);
      return res;
    }
  }
  return state;
}

export { seedReducer };