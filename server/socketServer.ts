import { Server as SocketIOServer } from "socket.io";
import https from "https";

export const initSocketServer = (server: https.Server) => {
  const io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("notification", (data) => {
      
      io.emit("newNotification", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};