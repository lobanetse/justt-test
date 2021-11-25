import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  SWAGGER_API_ROOT,
  SWAGGER_API_NAME,
  SWAGGER_API_CURRENT_VERSION,
  TagsDescription,
  Tags,
} from './constants';

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setVersion(SWAGGER_API_CURRENT_VERSION);

  Object.keys(Tags).forEach((key) =>
    options.addTag(Tags[key], TagsDescription[Tags[key]]),
  );

  const build = options.build();

  const document = SwaggerModule.createDocument(app, build);

  SwaggerModule.setup(SWAGGER_API_ROOT, app, document);
};
