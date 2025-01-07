import { HttpException } from './http.exception';

export class ForbiddenException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 403.
   * - `message`: the string `'Forbidden'` by default;
   */
  constructor(message: string = 'Forbidden') {
    super(message, 403);
  }
}
