import { HttpException } from './http.exception';

export class PayloadTooLargeException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 413.
   * - `message`: the string `'Payload Too Large'` by default;
   */
  constructor(message: string = 'Payload Too Large') {
    super(message, 413);
  }
}
