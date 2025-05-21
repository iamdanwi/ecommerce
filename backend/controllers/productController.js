import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
};

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
};

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
};