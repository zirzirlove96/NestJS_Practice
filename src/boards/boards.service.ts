import { Injectable } from '@nestjs/common';
import { BoardStatus, Boards } from './boards.model';

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
}
