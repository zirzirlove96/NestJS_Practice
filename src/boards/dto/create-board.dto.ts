import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() //pipe
  title: string;
  description: string;
}
