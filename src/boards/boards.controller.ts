import { Boards } from './boards.model';
import { Controller, Get, Body, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  public getAllBoards(): Boards[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  public createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Boards {
    return this.boardsService.createBoard(title, description);
  }
}
