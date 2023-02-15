import axios from "axios";
export const ALL_DOGS = "ALL_DOGS";
export const SEARCH_FOR_NAME = "SEARCH_FOR_NAME";
export const GET_DETAIL = "GET_DETAIL";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("http://localhost:3001/dogs"),
        json = await res.data;
      return dispatch({
        type: "ALL_DOGS",
        payload: json,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchForName = (name) => {
  return {
    type: "SEARCH_FOR_NAME",
    payload: name,
  };
};

export const getDetail = (id) => {
  return {
    type: "GET_DETAIL",
    payload: id,
  };
};
