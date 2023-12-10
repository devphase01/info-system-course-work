import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DataModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RequestsModule } from './modules/requests/requests.module';
import { StrategiesModule } from './modules/strategies/strategies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DataModule,
    AuthModule,
    UsersModule,
    RequestsModule,
    StrategiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
