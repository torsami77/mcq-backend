
import { Router } from 'express';
import userRoute from './api/authentication';

const router = new Router();
router.use('/users', userRoute);


export default router;
