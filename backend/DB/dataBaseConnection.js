import mongoose from "mongoose";

export const mongodbConnection = async(req,res,next) => {
    try {
        const res = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`DataBase Connected with : ${res.connection.host}`);
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
