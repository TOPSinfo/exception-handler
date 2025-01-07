import { HttpException } from './http.exception';

export class GatewayTimeoutException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 504.
   * - `message`: the string `'Gateway Timeout'` by default;
   */
  constructor(message: string = 'Gateway Timeout') {
    super(message, 504);
  }
}
