import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import databaseConfig from './config/databaseConfig';

@Injectable()
export class AppService {
  constructor(
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {
    console.log(dbConfig.host);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
