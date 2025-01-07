import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 400.
   * - `message`: the string `'Bad Request'` by default;
   */
  constructor(message: string = 'Bad Request') {
    super(message, 400);
  }
}
