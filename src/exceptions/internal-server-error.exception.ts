import { HttpException } from './http.exception';

export class InternalServerErrorException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 500.
   * - `message`: the string `'Internal server error'` by default;
   */
  constructor(message: string = 'Internal server error') {
    super(message, 500);
  }
}
