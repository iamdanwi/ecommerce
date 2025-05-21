import express from 'express';
import { placeOrder, getUserOrders, getAllOrders, updateOrderStatus } from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, placeOrder);
router.get('/my-orders', protect, getUserOrders);
router.get('/', protect, adminOnly, getAllOrders);
router.put('/:id', protect, adminOnly, updateOrderStatus);
export default router;