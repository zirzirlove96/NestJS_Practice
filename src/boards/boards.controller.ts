import { Boards } from './boards.model';
import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  public getAllBoards(): Boards[] {
    return this.boardsService.getAllBoards();
  }
}
