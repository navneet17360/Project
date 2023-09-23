
import mongoose from "mongoose";

const dbURL = "mongodb://127.0.0.1:27017/memories"; 

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
    console.log("database connected");
  });
  
  db.on("disconnected", () => {
    console.log("database disconnected");
  });
  
  db.on("error", () => {
    console.log("ERROR: database connection error");
  });
  

export default db;
