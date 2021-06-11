const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/users"),
  authMiddleware = require("../middlewares/auth"),
  isAdminMiddleware = require("../middlewares/isAdmin");

router.post("/search/:searchParam/:searchValue", controller.search);
router.get("/search/:searchParam/:searchValue", controller.search);
router.get("/add", controller.addUser);
router.post("/login", controller.login);
router.get("/is-admin", authMiddleware, isAdminMiddleware, controller.isAdmin);
router.post("/:id/delete", controller.delete);
router.get("/:id", controller.index);
router.post("/:id", controller.update);
router.get("/", authMiddleware, controller.list);
router.post("/", controller.register);

module.exports = router;
