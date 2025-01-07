import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/http.exception";

export function errorHandlerMiddleware(
  err: HttpException | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) return next(err);

  const status = err instanceof HttpException ? err.status : 500;
  const message =
    err instanceof HttpException ? err.message : "Internal Server Error";

  return res
    .status(status)
    .json({ data: null, message, statusCode: status, isSuccess: false });
}
