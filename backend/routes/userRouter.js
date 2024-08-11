import express from 'express';
const userRouter  = express.Router();
import { getUser, getUsers, postUsers } from '../controllers/userControllers.js';

userRouter.post('/storeP',postUsers)
userRouter.get('/getUsers',getUsers)
userRouter.get('/:id',getUser)

export default userRouter;