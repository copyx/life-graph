import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Response } from 'express';
import {
  // JoiValidationPipe,
  ValidationPipe,
} from 'src/validation.pipe';
// import * as Joi from 'joi';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  // @UsePipes(
  //   new JoiValidationPipe(
  //     Joi.object({
  //       title: Joi.string(),
  //     }),
  //   ),
  // )
  create(@Body(new ValidationPipe()) dto: CreateHabitDto) {
    const { title } = dto;
    return this.habitsService.create(title);
  }

  @HttpCode(200)
  @Get()
  findAll(@Res() res: Response) {
    const habits = this.habitsService.findAll();
    return res.send(habits);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.habitsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitsService.remove(+id);
  }
}
