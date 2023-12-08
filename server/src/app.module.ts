import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DataModule } from './database/database.module';
import { RequestsModule } from './requests/requests.module';
import { StrategiesModule } from './strategies/strategies.module';

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
