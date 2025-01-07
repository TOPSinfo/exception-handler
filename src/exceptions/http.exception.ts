export abstract class HttpException extends Error {
  public readonly message: string;
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
