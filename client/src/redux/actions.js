import axios from "axios";
export const ALL_DOGS = "ALL_DOGS";
export const SEARCH_FOR_NAME = "SEARCH_FOR_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_TEMP_DB = "GET_TEMP_DB";
export const GET_TEMP_API = "GET_TEMP_API";
export const FILTER_TEMP = "FILTER_TEMP";
export const FILTER_TEMP_DB = "FILTER_TEMP_DB";
export const ORDER_ASC_DES = "ORDER_ASC_DES";
export const ORDER_MAX_MIN = "ORDER_MAX_MIN";
export const CREATE_NEW_RACE = "CREATE_NEW_RACE";

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
  return (dispatch) => {
    fetch(`http://localhost:3001/dogs?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: SEARCH_FOR_NAME,
          payload: data,
        });
      });
  };
};

export const getDetail = (id) => {
  return {
    type: "GET_DETAIL",
    payload: id,
  };
};

export const getTempDB = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("http://localhost:3001/temperaments"),
        json = await res.data;
      return dispatch({
        type: GET_TEMP_DB,
        payload: json,
      });
    } catch (err) {
      console.log(err.message);
    }
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

export const filterTempDB = (temp) => {
  return {
    type: FILTER_TEMP_DB,
    payload: temp,
  };
};

export const orderAscDes = (order) => {
  return {
    type: ORDER_ASC_DES,
    payload: order,
  };
};
export const orderMaxMin = (order) => {
  return {
    type: ORDER_MAX_MIN,
    payload: order,
  };
};
export const createNewRace = (data) => {
  return async function () {
    try {
      const res = await axios.post("http://localhost:3001/dogs", data);
      alert("The race was satisfactorily created");
    } catch (err) {
      console.log(err);
    }
  };
};
