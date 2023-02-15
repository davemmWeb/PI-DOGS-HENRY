const axios = require("axios");
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { API_PASSWORD } = process.env;

const getDogs = async () => {
  const res = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_PASSWORD}`
  );
  const json = await res.data;
  // const races = [];
  // json.map((value) => races.push({ race: value.name }));
  return json;
};

const getForName = async (name) => {
  const res = await axios.get(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_PASSWORD}`
  );
  const dog = await res.data;
  if (dog.length === 1) {
    return dog;
  } else {
    const dog = await Dog.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: {
        model: Temperament,
      },
    });
    if (dog.length === 1) {
      return dog;
    } else {
      throw Error("name not found data_base");
    }
  }
};

const getForId = async (idRace) => {
  const res = await axios.get(
    `https://api.thedogapi.com/v1/breeds/search?q=${idRace}&api_key=${API_PASSWORD}`
  );
  const dog = await res.data;
  if (dog.length === 1) {
    return dog;
  } else {
    const dog = await Dog.findAll({
      where: {
        name: { [Op.iLike]: `%${idRace}%` },
      },
      include: {
        model: Temperament,
      },
    });
    if (dog.length === 1) {
      return dog;
    } else {
      throw Error("idRace not found data_base");
    }
  }
};

const createDog = async (image, name, height, weight, ageOfLife) => {
  const newDog = Dog.create({
    image,
    name,
    height,
    weight,
    ageOfLife,
  });
  return newDog;
};
module.exports = { getDogs, getForId, createDog, getForName };
