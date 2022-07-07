import express, { Request, Response, NextFunction } from "express";
const app = express();
import connectDB from "./loaders/db";
import routes from "./routes";
require("dotenv").config();
const cors = require("cors");

connectDB();

const corsOrigin = [
  "http://13.209.5.193:8000",
  "http://13.209.5.193:3000",
  "http://localhost:8000",
  "http://localhost:3000",
  "13.209.5.193",
];

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

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
    //   console.log(`
    //   ################################################
    //         🛡️  Server listening on port 🛡️
    //   ################################################
    // `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
