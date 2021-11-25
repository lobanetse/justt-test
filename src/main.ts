import { ApiConfigService } from '@common/services/api-config.service';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

const appConfig = (app: INestApplication) => {
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        value: false,
        target: false,
      },
    }),
  );
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appConfig(app);
  setupSwagger(app);

  await app.listen(ApiConfigService.port, ApiConfigService.host);

  Logger.log(
    `App started on ${ApiConfigService.host}:${ApiConfigService.port}`,
  );
}
bootstrap();
