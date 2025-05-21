import Order from '../models/Order.js';
import User from '../models/User.js';

export const placeOrder = async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart.product');
    const products = user.cart.map(item => ({ product: item.product._id, quantity: item.quantity }));
    const totalAmount = user.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    const order = await Order.create({ user: user._id, products, totalAmount });
    user.cart = [];
    await user.save();

    res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate('products.product');
    res.json(orders);
};

export const getAllOrders = async (req, res) => {
    const orders = await Order.find().populate('products.product user');
    res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(order);
};