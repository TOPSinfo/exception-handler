import { HttpException } from './http.exception';

export class NotFoundException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 404.
   * - `message`: the string `'Not Found'` by default;
   */
  constructor(message: string = 'Not Found') {
    super(message, 404);
  }
}
