import express, { Request, Response, NextFunction } from "express";
const app = express();
import connectDB from "./loaders/db";
import routes from "./routes";
require("dotenv").config();
const cors = require("cors");

connectDB();

let corsOptions_server = {
  origin: "http://13.209.5.193:8000",
  credentials: true,
  optionsSuccessStatus: 200,
};

let corsOptions_local1 = {
  origin: "http://localhost:8000",
  credentials: true,
  optionsSuccessStatus: 200,
};

let corsOptions_local2 = {
  origin: "http://localhost:3000",
  credentials: true,
<<<<<<< HEAD
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions_server1));
app.use(cors(corsOptions_server2));
=======
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions_server));
>>>>>>> 92c017b820a576d7fcef049f4654f0bb9169f984
app.use(cors(corsOptions_local1));
app.use(cors(corsOptions_local2));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, x-access-token"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes); //라우터
// error handler

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (
  err: ErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
