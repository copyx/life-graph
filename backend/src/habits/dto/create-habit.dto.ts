import { IsString } from 'class-validator';

export class CreateHabitDto {
  @IsString()
  title: string;
}
