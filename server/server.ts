import {app} from "./app";
require("dotenv").config();
import connectDB from "./utils/db";
import https from 'https';
import fs from 'fs';
import {v2 as cloudinary} from "cloudinary";
import { initSocketServer } from "./socketServer";

const options = {
    key: fs.readFileSync('../localhost-key.pem'),
    cert: fs.readFileSync('../localhost.pem')
  };

  const server = https.createServer(options, app);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
   });

   initSocketServer(server);
   

server.listen(process.env.PORT, () =>{
    console.log(`Server is connect`);
    connectDB();
});