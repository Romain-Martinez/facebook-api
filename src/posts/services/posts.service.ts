import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';
import { PrismaService } from 'src/database/services/prisma.service';
import { CreatePostDto } from '../dto/CreatePostDto';
import { UpdatePostDto } from '../dto/UpdatePostDto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreatePostDto) {
    return this.prisma.post.create({ data });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, data: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
