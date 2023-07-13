import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
  ) {}

  async create(perfilData:Perfil):Promise<Perfil> {
    const PERFIL = this.perfilRepository.create(perfilData);
    await this.perfilRepository.save(PERFIL);
    return PERFIL
  }
  findAll(): Promise<Perfil[]> {
    return this.perfilRepository.find();
  }

  findOne(id: number): Promise<Perfil | null> {
    return this.perfilRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.perfilRepository.delete(id);
  }
}
