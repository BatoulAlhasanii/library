import express, { Request, Response } from "express";
import { json } from "body-parser";
import "express-async-errors";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { indexUserRouter } from "./routes/users";
import { showUserRouter } from "./routes/users/show";
import { createUserRouter } from "./routes/users/create";
import { indexBookRouter } from "./routes/books";
import { showBookRouter } from "./routes/books/show";
import { createBookRouter } from "./routes/books/create";
import { borrowBookRouter } from "./routes/users/borrow-book";
import { returnBookRouter } from "./routes/users/return-book";

const app = express();
app.use(json());

app.use(errorHandler);

app.use(indexUserRouter);
app.use(showUserRouter);
app.use(createUserRouter);
app.use(borrowBookRouter);
app.use(returnBookRouter);

app.use(indexBookRouter);
app.use(showBookRouter);
app.use(createBookRouter);

app.get("*", (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
