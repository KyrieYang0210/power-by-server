import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/core/users/entities/user.entity';

export class AuthEntity extends UserEntity {
  @ApiProperty()
  access: string;
}
