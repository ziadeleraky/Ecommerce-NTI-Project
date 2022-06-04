const router = require("express").Router();
const auth = require('../app/middleware/auth.middleware');
const cartController = require('../app/controller/cart.controller');

router.post("/create", auth.verifyToken, cartController.create);

//update
// router.put("/:id", verify, async (req, res) => {
//    try {
//       const updateCart = await cart.findByIdAndUpdate(
//          req.params.id,
//          {
//             $set: req.body,
//          },
//          { new: true }
//       );
//       res.status(200).json(updateCart);
//    } catch (err) {
//       res.status(500).json(err);
//    }
// });
// ///delete
// router.delete("/:id", verify, async (req, res) => {
//    try {
//       await cart.findByIdAndDelete(req.params.id);
//       res.status(200).json("cart has been deleted.....");
//    } catch (err) {
//       res.status(500).json(err);
//    }
// });

// ///get user cart
// router.get("/find/:id", async (req, res) => {
//    try {
//       const cart = await cart.find({ userId: req.params.userId });
//       res.status(200).json(cart);
//    } catch (err) {
//       res.status(500).json(err);
//    }
// });
// ///get all
// router.get("/", verify, async (req, res) => {
//    try {
//       const carts = await cart.find();
//       res.status(200).json(carts);
//    } catch (err) {
//       res.status(500).json(err);
//    }
// });

module.exports = router;
