import express from 'express';
const userRouter  = express.Router();
import { getUsers, postUsers } from '../controllers/userControllers.js';

userRouter.post('/storeP',postUsers)
userRouter.get('/storeG',getUsers)

export default userRouter;