import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfil } from './entities/perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil])],
  providers: [PerfilService],
  controllers: [PerfilController],
  exports: [TypeOrmModule]
})
export class PerfilModule {}
