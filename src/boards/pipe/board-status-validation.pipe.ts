import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../boards.model';
import { Exclude } from 'class-transformer';

export class BoardstatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    value = value.toUpperCase();
    if (!(value == BoardStatus.PRIVATE || value == BoardStatus.PUBLIC)) {
      throw new BadRequestException(
        `${value} isn't in the status. you can change status`,
      );
    }
    return value;
  }
}
