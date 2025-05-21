import Product from '../models/Product.js';
import Order from '../models/Order.js';
import User from '../models/User.js';

export const getDashboardStats = async (req, res) => {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalRevenue = (await Order.find()).reduce((acc, order) => acc + order.totalAmount, 0);

    res.json({ totalUsers, totalOrders, totalProducts, totalRevenue });
};