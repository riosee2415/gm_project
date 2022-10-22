const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

app.get("/call", (req, res) => {
  console.log("Connected Call!");

  return res.json({
    data: "Backend에서 온 이브이는 왜 안줘???",
  });
});

app.listen(4000, () => {
  console.log("[4000PORT] AUTO REL BACKEND STARTED!");
});
