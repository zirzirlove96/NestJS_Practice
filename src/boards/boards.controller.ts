import { BoardStatus, Boards } from './boards.model';
import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardstatusValidationPipe } from './pipe/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  public getAllBoards(): Boards[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  public createBoard(@Body() createBoardDto: CreateBoardDto): Boards {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  public getIdBoard(@Param('id') id: string): Boards {
    return this.boardsService.getIdBoard(id);
  }

  @Get('/:id')
  public removeIdBoard(@Param('id') id: string): Boards[] {
    return this.boardsService.removeIdBoard(id);
  }

  //BoardstatusValidationPipe는 status의 유효성을 체크하기 위해 사용
  @Patch('/:id/status')
  public updatStatusBoard(
    @Param('id') id: string,
    @Body('status', BoardstatusValidationPipe) status: BoardStatus,
  ): Boards {
    return this.boardsService.updatStatusBoard(id, status);
  }
}
