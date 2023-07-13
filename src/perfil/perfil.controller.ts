import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Perfil } from './entities/perfil.entity';
import { PerfilService } from './perfil.service';

@Controller('perfiles')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  create(@Body() createUserDto: Perfil) {
    return this.perfilService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}
