import { Boards } from './boards.model';
import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  public getAllBoards(): Boards[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  public createBoard(@Body() createBoardDto: CreateBoardDto): Boards {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  public getIdBoard(@Param('id') id: string): Boards[] {
    return this.boardsService.getIdBoard(id);
  }
}
