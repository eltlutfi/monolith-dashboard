const router = require('express').Router();
const controller = require('../controllers');

// Routes
router.get('/', controller.home);

const dashboard = require("./dashboard");
router.use("/dashboard", dashboard);

const auth = require("./auth");
router.use("/auth", auth);


router.use(controller.notFound);
router.use(controller.exception);

module.exports = router 