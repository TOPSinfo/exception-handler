import { HttpException } from './http.exception';

export class ConflictException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 409.
   * - `message`: the string `'Conflict occurred'` by default;
   */
  constructor(message: string = 'Conflict occurred') {
    super(message, 409);
  }
}
