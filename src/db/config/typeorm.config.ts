import { ApiConfigService } from '@common/services/api-config.service';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export enum ConnectionNames {
  justt = 'just_test',
}

export enum mongoDBs {
  justt = 'justt_test',
}

const defaultMongoConfig: Partial<TypeOrmModuleOptions> = {
  type: 'mongodb',
  logging: true,
  synchronize: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const justtOrmConfig: TypeOrmModuleOptions = {
  ...defaultMongoConfig,
  name: ConnectionNames.justt,
  url: ApiConfigService.justtMongoUrl,
  database: mongoDBs.justt,
  entities: [`${ApiConfigService.srcDir}/db/justt/**/*.entity.{js,ts}`],
};
