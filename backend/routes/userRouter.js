import express from 'express';
const userRouter  = express.Router();
import { getUser, getUsers, postUsers } from '../controllers/userControllers.js';

userRouter.post('/storeP',postUsers)
userRouter.get('/:id',getUser)
userRouter.get('/storeG',getUsers)

export default userRouter;