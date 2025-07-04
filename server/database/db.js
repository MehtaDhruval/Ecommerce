import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2l1xxgj-shard-00-00.zpmo0eg.mongodb.net:27017,ac-2l1xxgj-shard-00-01.zpmo0eg.mongodb.net:27017,ac-2l1xxgj-shard-00-02.zpmo0eg.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-aucslk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Ecommerce`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;