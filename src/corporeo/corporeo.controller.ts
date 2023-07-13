import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorporeoService } from './corporeo.service';
import { CreateCorporeoDto } from './dto/create-corporeo.dto';
import { UpdateCorporeoDto } from './dto/update-corporeo.dto';
import { Corporeo } from './entities/corporeo.entity';

@Controller('corporeo')
export class CorporeoController {
  constructor(private readonly corporeoService: CorporeoService) {}

  @Post()
  create(@Body() createCorporeoDto: Corporeo) {
    return this.corporeoService.create(createCorporeoDto);
  }

  @Get()
  findAll() {
    return this.corporeoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corporeoService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCorporeoDto: UpdateCorporeoDto) {
  //   return this.corporeoService.update(+id, updateCorporeoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corporeoService.remove(+id);
  }
}
