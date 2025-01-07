import { HttpException } from "./http.exception";

export class UnauthorizedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 401.
   * - `message`: the string `'Unauthorized'` by default;
   */
  constructor(message: string = "Unauthorized") {
    super(message, 401);
  }
}
