import { HttpStatus } from '@nestjs/common';

export class ExceptionCode {
  constructor(
    private readonly code: string,
    private readonly message: string,
    private readonly status: number,
  ) {}
  getCode = () => this.code;
  getMessage = () => this.message;
  getStatus = () => this.status;
}

export const ExceptionCodeList = {
  COMMON: {
    WRONG_REQUEST: new ExceptionCode(
      'WRONG_REQUEST',
      '요청 오류',
      HttpStatus.BAD_REQUEST,
    ),
  },
};
