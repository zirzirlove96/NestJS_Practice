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

  createBoard(title: string, description: string) {
    const board: Boards = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    }; //게시판 생성

    this.boards.push(board);

    return board;
  }
}
