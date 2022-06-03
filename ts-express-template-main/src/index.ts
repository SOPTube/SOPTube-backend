import express, { Request, Response, NextFunction } from "express";
const app = express();
import connectDB from "./loaders/db";
import routes from "./routes";
require("dotenv").config();
const cors = require("cors");

connectDB();

let corsOptions = {
  origin: ["http://13.209.5.193:8000",
    "http://13.209.5.193:3000", 
    "http://localhost:8000", 
    "http://localhost:3000", 
    "13.209.5.193"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes); //라우터
// error handler

interface ErrorType {
  message: string;
  status: number;
}

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "aws ec2 인스턴스 주소"],
  })
);

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
