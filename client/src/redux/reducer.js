import { ALL_DOGS, SEARCH_FOR_NAME, GET_DETAIL } from "./actions";

const initialState = {
  allDogs: [],
  searchForName: [],
  getDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    case SEARCH_FOR_NAME:
      const dogs = state.allDogs;
      const dog = dogs.filter(
        (value) => value.name.toLowerCase() === action.payload.toLowerCase()
      );
      return {
        ...state,
        searchForName: dog,
      };
    case GET_DETAIL:
      const details = state.allDogs;
      const detail = details.filter((value) => value.id == action.payload);
      return {
        ...state,
        getDetail: detail,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
