import { HttpException } from './http.exception';

export class MethodNotAllowedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 405.
   * - `message`: the string `'Method Not Allowed'` by default;
   */
  constructor(message: string = 'Method Not Allowed') {
    super(message, 405);
  }
}
