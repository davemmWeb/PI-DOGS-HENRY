const { Router } = require("express");
const { getTemp } = require("../controllers/controlTemp");

const router = Router();

// 📍 GET | /temperaments
router.get("/", async (req, res) => {
  try {
    const temp = await getTemp();
    res.status(202).json(temp);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
