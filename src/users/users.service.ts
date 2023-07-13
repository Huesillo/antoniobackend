import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData:User):Promise<User> {
    const USER = this.usersRepository.create(userData);
    await this.usersRepository.save(USER);
    return USER
  }

  async findAll(): Promise<User[]> {
    const USERS=await this.usersRepository.find();
    console.log(USERS);
    return  USERS
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
