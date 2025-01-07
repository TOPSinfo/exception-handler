import { HttpException } from './http.exception';

export class RequestTimeoutException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 408.
   * - `message`: the string `'Request Timeout'` by default;
   */
  constructor(message: string = 'Request Timeout') {
    super(message, 408);
  }
}
