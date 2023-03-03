const { Router } = require("express");
const {
  getDogs,
  getForId,
  createDog,
  getForName,
  deleteDog,
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
  const { name, image, height, weight, life_span, temperaments } = req.body;
  if (
    ![name, image, height, weight, life_span, temperaments.length].every(
      Boolean
    )
  ) {
    res.status(400).send("incomplete data");
  } else {
    try {
      const newDog = await createDog(
        image,
        name,
        height,
        weight,
        life_span,
        temperaments
      );
      res.status(200).json(newDog);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
});
// 📍 DELETE | /dogs
router.delete("/", async (req, res) => {
  const { name } = req.query;
  try {
    const dogDelete = await deleteDog(name);
    res.status(200).send(dogDelete);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
