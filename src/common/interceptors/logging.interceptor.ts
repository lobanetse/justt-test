import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;

    const commonLogMessage = `${method} ${url}`;

    Logger.log(`${commonLogMessage}`, context.getClass().name);
    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `${commonLogMessage} Done with time -> ${Date.now() - now}ms`,
            context.getClass().name,
          ),
        ),
      );
  }
}
