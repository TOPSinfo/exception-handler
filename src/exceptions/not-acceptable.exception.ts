import { HttpException } from './http.exception';

export class NotAcceptableException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 406.
   * - `message`: the string `'Not Acceptable'` by default;
   */
  constructor(message: string = 'Not Acceptable') {
    super(message, 406);
  }
}
