const TaskController = require("../controller/task.controller"); // Sin destructuración
const router = require("express").Router();

router.get("/", TaskController.getAll);
router.get("/complete", TaskController.getComplete);
router.get("/unfinished", TaskController.getUnfinished);
router.post("/", TaskController.create);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);

module.exports = router;
