import {errorHandler} from '../utils/errorHandler.js';
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
        const userDb =await UserDb.create({name:name,age:age,message:message,customeEnd:value});
        if (!userDb) {
            return next(errorHandler(404, 'somthing went wrong'));
        }
        console.log(userDb);

        res.status(200).json({message:"ok",id:userDb._id,name:userDb.name,age:userDb.age,message:userDb.message,customeEnd:userDb.customeEnd});
    } catch (error) {
        next(error);
    }
}
export const getUser = async(req,res,next)=>{
    try {
        const {id} = req.params;
        if(!id){
            return next(errorHandler(404,'something went to wrong!!, try again later'));
        }
        const findId = id.split('-');

        const user = await UserDb.findById({_id:findId[0]});
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }
        
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const getUsers = async(req,res,next)=>{
    try {
        res.send('sended')
    } catch (error) {
        next(error);
    }
}