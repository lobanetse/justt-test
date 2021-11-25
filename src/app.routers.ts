import { Routes } from 'nest-router';
import { AppModule } from './app.module';
import { CustomerModule } from './modules/customers/customers.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

export const routes: Routes = [
  {
    path: '/api',
    module: AppModule,
    children: [
      {
        path: '/customers',
        module: CustomerModule,
      },
      {
        path: '/transactions',
        module: TransactionsModule,
      },
    ],
  },
];
