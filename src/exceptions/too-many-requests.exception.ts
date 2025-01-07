import { HttpException } from './http.exception';

export class TooManyRequestsException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 429.
   * - `message`: the string `'Too many requests from this IP, please try again after sometime.'` by default;
   */
  constructor(message: string = 'Too many requests from this IP, please try again after sometime.') {
    super(message, 429);
  }
}
