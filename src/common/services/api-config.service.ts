import { Injectable } from '@nestjs/common';
import config from 'config';
import * as path from 'path';

@Injectable()
export class ApiConfigService {
  // TODO: Add types and validation for config
  private static _config: any = { ...config };
  private static _appDir = path.dirname(require.main.filename);

  static get port(): number {
    return this._config.port || 3000;
  }

  static get host(): string {
    return this._config.host || 'localhost';
  }

  static get justtMongoUrl(): string {
    return this._config.justMongoUrl || 'mongodb://localhost:27017/';
  }

  static get srcDir(): string {
    return this._appDir;
  }
}
