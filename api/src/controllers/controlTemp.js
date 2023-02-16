const axios = require("axios");
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { API_PASSWORD } = process.env;

const getTemp = async () => {
  const res = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_PASSWORD}`
  );
  const json = await res.data;
  const onlyTemps = json.map((value) => value.temperament);
  const temps = onlyTemps.join(",").split(",");
  const mySet = new Set();
  temps.forEach((e) => {
    mySet.add(e.trim() ? e.trim() : "not found");
  });
  const arrSet = Array.from(mySet);
  arrSet.forEach((e) => {
    Temperament.create({
      name: e,
    });
  });

  const temperaments = await Temperament.findAll();

  return temperaments;
};

module.exports = { getTemp };
