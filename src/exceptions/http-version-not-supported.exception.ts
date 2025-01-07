import { HttpException } from './http.exception';

export class HttpVersionNotSupportedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 505.
   * - `message`: the string `'HTTP Version Not Supported'` by default;
   */
  constructor(message: string = 'HTTP Version Not Supported') {
    super(message, 505);
  }
}
