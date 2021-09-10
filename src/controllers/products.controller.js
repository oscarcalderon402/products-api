import Product from "../models/Product";

export const createProducts = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const newProduct = new Product({ name, category, price, imgURL });
  const response = await newProduct.save();

  res.status(201).json(response);
};
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
export const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.json(product);
};
export const updateProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  res.json(product);
};
export const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.json();
  } catch (error) {
    console.log(error);
  }
};
