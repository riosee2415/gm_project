const app = require("express")();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

const PORT = 4012;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log(`${socket.id}가 접속되었습니다.`);

  socket.on("message", (param) => {
    io.emit("message", param);
  });
});

http.listen(PORT, "0.0.0.0", () => {
  console.log(`${PORT} Socket Server Start!`);
});
