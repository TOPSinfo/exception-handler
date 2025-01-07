import { HttpException } from './http.exception';

export class MisdirectedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 421.
   * - `message`: the string `'Misdirected'` by default;
   */
  constructor(message: string = 'Misdirected') {
    super(message, 421);
  }
}
