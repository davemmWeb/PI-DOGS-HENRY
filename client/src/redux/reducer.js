import {
  ALL_DOGS,
  SEARCH_FOR_NAME,
  GET_DETAIL,
  GET_TEMP_API,
  GET_TEMP_DB,
  FILTER_TEMP,
  FILTER_TEMP_DB,
  ORDER_ASC_DES,
  ORDER_MAX_MIN,
} from "./actions";

const initialState = {
  all_dogs: [],
  search_for_name: [],
  get_detail: [],
  get_temp_db: [],
  get_temp_api: [],
  filter_temp: [],
  filter_temp_db: [],
  order_asc_des: [],
  order_max_min: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        all_dogs: action.payload,
      };

    case SEARCH_FOR_NAME:
      return {
        ...state,
        search_for_name: action.payload,
      };

    case GET_DETAIL:
      const details = state.all_dogs;
      const detail = details.filter((value) => value.id == action.payload);
      return {
        ...state,
        get_detail: detail,
      };

    case GET_TEMP_DB:
      return {
        ...state,
        get_temp_db: action.payload,
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
    case FILTER_TEMP_DB:
      const racesDb = state.all_dogs;
      const tempDb = racesDb.filter(
        (value) =>
          value.temperament && value.temperament.includes(action.payload)
      );
      return {
        ...state,
        filter_temp_db: tempDb,
      };
    case ORDER_ASC_DES:
      const filter = state.filter_temp.length
        ? state.filter_temp
        : state.filter_temp_db.length
        ? state.filter_temp_db
        : state.all_dogs;
      action.payload === "ASC"
        ? filter.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          })
        : filter.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
          });
      return {
        ...state,
        order_asc_des: filter,
      };
    case ORDER_MAX_MIN:
      const filterMax = state.filter_temp.length
        ? state.filter_temp
        : state.filter_temp_db.length
        ? state.filter_temp_db
        : state.all_dogs;

      action.payload === "min_max"
        ? filterMax.sort((a, b) => {
            return parseInt(a.weight.imperial) - parseInt(b.weight.imperial);
          })
        : filterMax.sort((a, b) => {
            return parseInt(b.weight.imperial) - parseInt(a.weight.imperial);
          });
      return {
        ...state,
        order_max_min: filterMax,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
