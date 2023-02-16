import axios from "axios";
export const ALL_DOGS = "ALL_DOGS";
export const SEARCH_FOR_NAME = "SEARCH_FOR_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_TEMP_DB = "GET_TEMP_DB";
export const GET_TEMP_API = "GET_TEMP_API";
export const FILTER_TEMP = "FILTER_TEMP";

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

export const getTempDB = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/temperaments")
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: "GET_TEMP_DB",
          payload: data,
        });
      })
      .catch((err) => err.message);
  };
};

export const getTempApi = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("http://localhost:3001/dogs"),
        json = await res.data;
      return dispatch({
        type: "GET_TEMP_API",
        payload: json,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterTemp = (temp) => {
  return {
    type: FILTER_TEMP,
    payload: temp,
  };
};
