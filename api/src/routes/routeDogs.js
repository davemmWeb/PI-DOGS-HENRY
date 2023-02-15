const { Router } = require("express");
const {
  getDogs,
  getForId,
  createDog,
  getForName,
} = require("../controllers/controlDogs");

const router = Router();

// 📍 GET | /dogs/name?="..."
router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const dog = await getForName(name);
      res.status(200).json(dog);
    } catch (err) {
      res.status(400).send(err.message);
    }
  } else {
    try {
      const dogs = await getDogs();
      res.status(200).json(dogs);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
});

// 📍 GET | /dogs/:idRaza
router.get("/:idRace", async (req, res) => {
  const { idRace } = req.params;
  if (idRace) {
    try {
      const detail = await getForId(idRace);
      res.status(200).json(detail);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
});

// 📍 POST | /dogs
router.post("/", async (req, res) => {
  const { image, name, height, weight, ageOfLife } = req.body;
  if (![image, name, height, weight, ageOfLife].every(Boolean)) {
    res.status(400).send("Error entering data");
  } else {
    const newDog = await createDog(image, name, height, weight, ageOfLife);
    res.status(200).json(newDog);
  }
});

module.exports = router;
