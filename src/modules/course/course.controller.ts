import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Prisma, Course as CourseModel } from '@prisma/client';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(
    @Body() courseData: Prisma.CourseCreateInput,
  ): Promise<CourseModel> {
    return this.courseService.create(courseData);
  }

  @Get()
  findAll(): Promise<CourseModel[]> {
    return this.courseService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CourseModel> {
    return this.courseService.findOne({ id: Number(id) });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() courseData: Prisma.CourseUpdateInput,
  ): Promise<CourseModel> {
    return this.courseService.update({
      where: { id: Number(id) },
      data: courseData,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CourseModel> {
    return this.courseService.remove({ id: Number(id) });
  }
}
