import { HttpException } from './http.exception';

export class GoneException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 410.
   * - `message`: the string `'Gone'` by default;
   */
  constructor(message: string = 'Gone') {
    super(message, 410);
  }
}
