import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongodb conncted ${connect.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection error: ", error);
  }
};
