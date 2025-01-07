import { HttpException } from './http.exception';

export class PreconditionFailedException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 412.
   * - `message`: the string `'Precondition Failed'` by default;
   */
  constructor(message: string = 'Precondition Failed') {
    super(message, 412);
  }
}
