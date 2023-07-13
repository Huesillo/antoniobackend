import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestType } from './entities/request-type.entity';

@Injectable()
export class RequestTypeService {
  constructor(
    @InjectRepository(RequestType)
    private requestTypeRepository: Repository<RequestType>,
  ) {}
  async create(requestTypeData:RequestType):Promise<RequestType> {
    const REQUESTTYPE = this.requestTypeRepository.create(requestTypeData);
    await this.requestTypeRepository.save(REQUESTTYPE);
    return REQUESTTYPE
  }
  findAll(): Promise<RequestType[]> {
    return this.requestTypeRepository.find();
  }

  findOne(id: number): Promise<RequestType | null> {
    return this.requestTypeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.requestTypeRepository.delete(id);
  }
}
