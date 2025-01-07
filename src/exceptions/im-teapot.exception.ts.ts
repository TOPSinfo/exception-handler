import { HttpException } from './http.exception';

export class ImATeapotException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 418.
   * - `message`: the string `'I'm a Teapot'` by default;
   */
  constructor(message: string = "I'm a Teapot") {
    super(message, 418);
  }
}
