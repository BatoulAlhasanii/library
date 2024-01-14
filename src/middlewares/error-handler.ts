import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { EntityNotFoundError } from "typeorm";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (err instanceof EntityNotFoundError) {
    const entityName = err.message.split('"')[1];
    res.status(404).json({
      errors: [{ message: `${entityName} not found` }],
    });
  }

  console.log("helooooooooooooooo", err);
  res.status(400).send({
    errors: [{ message: "something went wrong" }],
  });
};
