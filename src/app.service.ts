import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello() {
    return this.httpService.post('https://www.bitget.com/v1/act/candyBombNew/current/list', '{"airDropType":0}', {
      adapter: 'fetch',
      headers: {
        host: 'www.bitget.com',
        connection: 'keep-alive',
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=UTF-8',
        'accept-language': '*',
        'sec-fetch-mode': 'cors',
        // "user-agent": "undici",
        'accept-encoding': 'gzip, deflate',
        'content-length': '17',
      },
    });
  }
}
