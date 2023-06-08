import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findUserPermission(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
