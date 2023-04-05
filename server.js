//basic konfigurasi express
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { routes as usersRoutes } from "./src/router";
const app = express();
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

//middleware
app.use(cors());
app.use(helmet());

//engine setup
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json()); //untuk menampilkan hasil json pada response
app.use(express.static("public")); //menampilkan assets publik

//Routing Halaman Home
app.get("/", (req, res) => {
  const iam = {
    id: 1,
    name: "alwi wahyu waludin",
    nickname: "alwisteins",
  };
  res.render("pages/home", { iam });
});

//Routing Halaman About
app.get("/about", (req, res) => {
  res.render("pages/about");
});

//route untuk menghandle path '/users'
app.use(usersRoutes);

app.use("/", (req, res) => {
  res.send("404notfound");
  res.status(404);
});

//aktifasi server dan port
app.listen(PORT, () => {
  console.log(`Server sedang berjalan di http://localhost:${PORT}`);
});
