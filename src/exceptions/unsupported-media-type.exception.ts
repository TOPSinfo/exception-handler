import { HttpException } from './http.exception';

export class UnsupportedMediaTypeException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 415.
   * - `message`: the string `'Unsupported Media Type'` by default;
   */
  constructor(message: string = 'Unsupported Media Type') {
    super(message, 415);
  }
}
