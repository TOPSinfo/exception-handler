import { HttpException } from './http.exception';

export class NotImplementedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 501.
   * - `message`: the string `'Not Implemented'` by default;
   */
  constructor(message: string = 'Not Implemented') {
    super(message, 501);
  }
}
