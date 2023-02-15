const { Router } = require("express");
const Dogs = require("./routeDogs");
const Temp = require("./routeTemp");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", Dogs);
router.use("/temperaments", Temp);

module.exports = router;
