import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  access: string;
}
