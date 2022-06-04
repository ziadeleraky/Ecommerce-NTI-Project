const router = require("express").Router();
const productController = require("../app/controller/product.controller");
const auth = require("../app/middleware/auth.middleware");
const upload = require("../app/middleware/uploadFiles.middleware");

router.post(
   "/addNew",
   auth.verifyAdmin,
   upload.single("productImg"),
   productController.addNew
);

router.get("/find/:id", auth.verifyAdmin, productController.getSingleProduct);

router.put("/update/:id", auth.verifyAdmin, productController.updateProduct);

router.delete("/delete/:id", auth.verifyAdmin, productController.deleteProduct);

// get all products
router.get("/", productController.getProducts);

module.exports = router;
