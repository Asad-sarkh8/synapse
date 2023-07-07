import mongoose from "mongoose";

let isConnected = false; //connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //avoid warnings in console

  if (isConnected) {
    console.log("Already connected to Database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "synapse",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
