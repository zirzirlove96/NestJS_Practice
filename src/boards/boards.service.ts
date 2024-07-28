import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable, Param } from '@nestjs/common';
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

  getIdBoard(id: string): Boards {
    return this.boards.find((board) => board.id === id);
  }

  removeIdBoard(id: string): Boards[] {
    this.boards.filter((o) => o.id === id);

    return this.boards;
  }

  updatStatusBoard(id: string, status: BoardStatus): Boards {
    //this.boards.find((o) => o.id === param.id).status = param.status;
    const board = this.getIdBoard(id);
    board.status = status;
    return board;
  }
}
