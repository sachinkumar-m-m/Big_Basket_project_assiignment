const jwt = require("jsonwebtoken");
const Product = require("../model/productModel");
const ProductFeature = require("../middleware/ProductFeatures");
const Auth = require("../model/authModel");

const getRolePrice = async(req) =>{
    let calculatePrice = 1;
    const ref = req.signedCookies.refreshToken;
    await jwt.verify(ref, process.env.REF_TOKEN_SECRET, async(err, user) => {
      if (!err && user.id)
      {
          const data = await Auth.findById({ _id: user.id }).select( "-password" );
          calculatePrice = data.role === 'hotel' ? 0.95 : data.role ==='supermarket' ? 0.9 : 1 ;


      }
    });
    return calculatePrice;
}

const ProductCtrl = {
  getAllProducts: async (req, res) => {
    try {
      const calculatePrice = await getRolePrice(req);
      let data = await Product.find();
      data = data.map(e=>({price:parseInt(e.price * calculatePrice ), _id:e._id.toString(), title:e.title, category:e.category, qnty:e.qnty, desc:e.desc, image:e.image, stock:e.stock, sold:e.sold, freeShipping:e.freeShipping, rating:e.rating}))
      const features = new ProductFeature(Product.find(), req.query)

      .filtering().sorting().paginating()
  

      const feature = await features.query

      res.json({
        products: feature,data,
        result: data.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const calculatePrice = await getRolePrice(req);
      let product = await Product.findById({ _id: req.params.id });
      res.status(200).json({ product:{...product._doc, price:parseInt(product._doc.price * calculatePrice)} });
      // res.json({ msg: "get single products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      let product = await Product.create(req.body);
      res.status(200).json({ msg: "product created successfully" });
      // res.json({msg: "create products"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      if (!product)
        return res.status(400).json({ msg: "product doesn't exixts." });
      res.status(200).json({ msg: "product updated successfully" });
      // res.json({ msg: "update products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ msg: "product deleted successfully" });
      // res.json({ msg: "delete products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ProductCtrl;