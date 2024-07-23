import mongoose, { Mongoose } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("db already connected");
    return;
  }
  try {
    const db = await mongoose.connect(
      "mongodb+srv://drlevio:Rahul1998@cluster0.k9sm2do.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected successfull");
  } catch (error) {
    console.log("db not connected", error);
    process.exit(1);
  }
}

export default dbConnect;
