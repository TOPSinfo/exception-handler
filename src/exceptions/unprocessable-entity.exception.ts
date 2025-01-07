import { HttpException } from './http.exception';

export class UnprocessableEntityException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 422.
   * - `message`: the string `'Unprocessable Entity'` by default;
   */
  constructor(message: string = 'Unprocessable Entity') {
    super(message, 422);
  }
}
