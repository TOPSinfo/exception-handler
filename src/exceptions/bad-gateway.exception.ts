import { HttpException } from './http.exception';

export class BadGatewayException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 502.
   * - `message`: the string `'Bad Gateway'` by default;
   */
  constructor(message: string = 'Bad Gateway') {
    super(message, 502);
  }
}
