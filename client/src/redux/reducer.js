import {
  ALL_DOGS,
  SEARCH_FOR_NAME,
  GET_DETAIL,
  GET_TEMP_API,
  GET_TEMP_DB,
  FILTER_TEMP,
} from "./actions";

const initialState = {
  all_dogs: [],
  search_for_name: [],
  get_detail: [],
  get_temp_db: [],
  get_temp_api: [],
  filter_temp: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        all_dogs: action.payload,
      };

    case SEARCH_FOR_NAME:
      const dogs = state.all_dogs;
      const dog = dogs.filter(
        (value) => value.name.toLowerCase() === action.payload.toLowerCase()
      );
      return {
        ...state,
        search_for_name: dog,
      };

    case GET_DETAIL:
      const details = state.all_dogs;
      const detail = details.filter((value) => value.id == action.payload);
      return {
        ...state,
        get_detail: detail,
      };

    case GET_TEMP_DB:
      const tempsDB = action.payload.map((value) => value.name);
      return {
        ...state,
        get_temp_db: tempsDB,
      };

    case GET_TEMP_API:
      const data = action.payload;
      const arrTemps = [];
      const onlyTemps = data.map((value) => value.temperament);
      const temps = onlyTemps.join(",").split(",");
      const mySet = new Set();
      temps.forEach((e) => {
        mySet.add(e.trim() ? e.trim() : "not found");
      });
      for (const item of mySet) {
        arrTemps.push(item);
      }
      return {
        ...state,
        get_temp_api: arrTemps,
      };

    case FILTER_TEMP:
      const races = state.all_dogs;
      const temp = races.filter(
        (value) =>
          value.temperament && value.temperament.includes(action.payload)
      );
      return {
        ...state,
        filter_temp: temp,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
