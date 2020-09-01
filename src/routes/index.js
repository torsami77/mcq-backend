
import { Router } from 'express';
import userRoute from './api/authentication';
import storiesRoute from './api/stories';

const router = new Router();
router.use('/users', userRoute);
router.use('/exams', storiesRoute);


export default router;
