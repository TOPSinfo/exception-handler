import { HttpException } from './http.exception';

export class ServiceUnavailableException extends HttpException {
  /**
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 503.
   * - `message`: the string `'Service Unavailable'` by default;
   */
  constructor(message: string = 'Service Unavailable') {
    super(message, 503);
  }
}
