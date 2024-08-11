import {errorHandler, generateNextCount} from '../utils/errorHandler.js';
import UserDb from '../modules/userDB.js';

export const postUsers = async(req,res,next)=>{
    try {
        const {name,age,message,customeEnd} = req.body;

        let value;
        if(!name || !age || !message){
            return next(errorHandler(404,'user input required'));
        };
        if(customeEnd){
            value = customeEnd
        }else{
            value = Math.floor(100000 + Math.random() * 900000)
        }
        const lastUser = await UserDb.findOne().sort({ _id: -1 });
        let nextCount = '0001';
        if(lastUser){
            nextCount = generateNextCount(lastUser.totalUserCount);
        }
        const userDb =await UserDb.create({name:name,age:age,message:message,customeEnd:value,totalUserCount:nextCount});
        if (!userDb) {
            return next(errorHandler(404, 'somthing went wrong'));
        }

        res.status(200).json({message:"ok",id:userDb._id,name:userDb.name,age:userDb.age,message:userDb.message,customeEnd:userDb.customeEnd});
    } catch (error) {
        next(error);
    }
}
export const getUser = async(req,res,next)=>{
    try {
        const {id} = req.params;
        if(!id){
            next(errorHandler(404,'something went to wrong!!, try again later'));
        }
        const findId = id.split('-');

        const user = await UserDb.findById({_id:findId[0]});
        if (!user) {
            next(errorHandler(404, 'User not found'));
        }
        
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const getUsers = async(req,res,next)=>{
    try {
        const userCount = await UserDb.countDocuments();
        if(userCount >= 10){
            const oldUsers = await UserDb.findOne().sort({createdAt: 1})
            // console.log(oldUsers)
            await oldUsers.remove();
        }
        const users = await UserDb.find();
        if(!users){
            next(errorHandler(404, 'User not found'));
        };
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}