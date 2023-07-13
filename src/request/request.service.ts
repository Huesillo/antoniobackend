import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}
  async create(requestData:Request):Promise<Request> {
    const REQUEST = this.requestRepository.create(requestData);
    await this.requestRepository.save(REQUEST);
    return REQUEST
  }
  findAll(): Promise<Request[]> {
    return this.requestRepository.find();
  }

  findOne(id: number): Promise<Request | null> {
    return this.requestRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.requestRepository.delete(id);
  }
}
