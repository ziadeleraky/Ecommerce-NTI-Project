const router = require("express").Router();
const userController = require("../app/controller/user.controller");
const auth = require("../app/middleware/auth.middleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get('/logout', auth.verifyToken, userController.logout)

router.put('/editPass',auth.verifyToken ,userController.editPassword)
router.put("/:id", auth.verifyAuthorization, userController.editUser);
router.put("/activate/:id", auth.verifyAuthorization, userController.activateUser);

router.patch("/activateWithoutAuth", userController.activateWithoutUserAuth);

router.delete('/:id', auth.verifyAuthorization, userController.deleteUser);

router.get("/me", auth.verifyToken, userController.getUserData);

router.get("/find/", auth.verifyAdmin, userController.getAllData);



module.exports = router;