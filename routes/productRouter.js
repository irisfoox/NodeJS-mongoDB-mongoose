const productRouter=require("express").Router();
const product=require("../controlers/productController"); //all user functions

productRouter.post('/newProduct',product.newProduct);
productRouter.get('/findProductById/:id',product.findProductById);
productRouter.get('/getAllProducts',product.getAllProducts);
productRouter.get('/getAllProducts1',product.getAllProducts1);
productRouter.get('/getAllProducts2',product.getAllProducts2);
productRouter.patch('/updateById',product.updateById);
productRouter.patch('/updateByPrice',product.updateByPrice);
productRouter.get('/findProductByName',product.findProductByName);
productRouter.patch('/updateOne',product.updateOne);
productRouter.put('/updateWhole',product.updateWhole);
productRouter.delete('/deleteProductById',product.deleteProductById);
productRouter.delete('/deleteOne',product.deleteOne);
module.exports=productRouter;
