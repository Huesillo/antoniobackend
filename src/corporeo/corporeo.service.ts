import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Corporeo } from './entities/corporeo.entity';

@Injectable()
export class CorporeoService {
  constructor(
    @InjectRepository(Corporeo)
    private corporeoRepository: Repository<Corporeo>,
  ) {}

  async create(corporeoData:Corporeo):Promise<Corporeo> {
    const CORPOREO = this.corporeoRepository.create(corporeoData);
    await this.corporeoRepository.save(CORPOREO);
    return CORPOREO
  }
  findAll(): Promise<Corporeo[]> {
    return this.corporeoRepository.find();
  }

  findOne(id: number): Promise<Corporeo | null> {
    return this.corporeoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.corporeoRepository.delete(id);
  }
}
