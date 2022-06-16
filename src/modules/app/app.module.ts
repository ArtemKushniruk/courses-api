import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from '../course/course.module';
import { PrismaService } from '../../services/prisma.service';

@Module({
  imports: [CourseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
