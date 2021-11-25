import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';
import { justtOrmConfig } from '@db/config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { AppController } from './app.controller';
import { routes } from './app.routers';
import { CustomerModule } from './modules/customers/customers.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(justtOrmConfig),
    RouterModule.forRoutes(routes),

    CustomerModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
