const {getProduct,postProduct,updataProduct,deleteProduct} = require("../controller/productcontroller")

const route = require("express").Router()

route.get("/",getProduct)
route.post("/",postProduct)
route.put("/:id",updataProduct)
route.delete("/:id",deleteProduct)

module.exports = route