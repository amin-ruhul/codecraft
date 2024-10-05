const express = require("express");
const http = require("http");

const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 5000;

app.use(express.static("dist"));
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

io.on("connection", (socket) => {
  socket.on("join-request", ({ roomId, user }) => {
    console.log(`join - request: ${user} - ${roomId}`);
    socket.join(roomId);

    io.to(roomId).emit("joined", { roomId, user });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
