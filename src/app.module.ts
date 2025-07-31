import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

import { ConfigModule } from '@nestjs/config';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    AuthModule,
    UserModule,
    BookmarkModule,
    DoctorsModule,
  ],
  controllers: [HelloController],
})
export class AppModule {}
