import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable } from '@nestjs/common';
import { BoardStatus, Boards } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Boards[] = [
    {
      id: 'asdasd',
      title: 'asdasd',
      description: 'asdqwdas',
      status: BoardStatus.PRIVATE,
    },
  ];

  getAllBoards(): Boards[] {
    return this.boards;
  }

  createBoard(createDtto: CreateBoardDto) {
    const board: Boards = {
      id: uuid(),
      title: createDtto.title,
      description: createDtto.description,
      status: BoardStatus.PUBLIC,
    }; //게시판 생성

    this.boards.push(board);

    return board;
  }

  getIdBoard(id: string): Boards[] {
    return this.boards[id];
  }
}
