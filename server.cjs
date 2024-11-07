const express = require("express");
const http = require("http");

const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 5000;

const connectedUsers = {};

app.use(express.static("dist"));
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

function getConnectedUsers(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        name: connectedUsers[socketId],
      };
    }
  );
}

io.on("connection", (socket) => {
  socket.on("join-request", ({ roomId, user, code }) => {
    console.log(`join - request: ${user} - ${roomId}`);
    connectedUsers[socket.id] = user;
    socket.join(roomId);
    const users = getConnectedUsers(roomId);
    io.to(roomId).emit("joined", { roomId, user, socketId: socket.id, users });

    socket.emit("code-change", { code });
  });

  socket.on("code-change", ({ code, roomId }) => {
    io.to(roomId).emit("code-change", { code });
  });

  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.to(roomId).emit("disconnected", {
        socketId: socket.id,
        user: connectedUsers[socket.id],
      });
    });

    console.log(`disconnecting: ${socket.id}`);
    delete connectedUsers[socket.id];
    socket.leave();
  });
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
