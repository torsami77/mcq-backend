import express from 'express';
import { Stories } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate } = middleware;

const {
  writeExams
} = Stories;

const router = express.Router();

router.get('/write-exams', Authenticate.verifyToken, writeExams);

export default router;
