import User from '../models/User.js';

export const getCart = async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart.product');
    res.json(user.cart);
};

export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.user._id);

    const item = user.cart.find(i => i.product.toString() === productId);
    if (item) {
        item.quantity += quantity;
    } else {
        user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.json(user.cart);
};

export const removeFromCart = async (req, res) => {
    const { productId } = req.params;
    const user = await User.findById(req.user._id);

    user.cart = user.cart.filter(i => i.product.toString() !== productId);
    await user.save();
    res.json(user.cart);
};