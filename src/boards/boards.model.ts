export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface Boards {
  id?: string;
  title: string;
  description: string;
  status?: BoardStatus;
}
