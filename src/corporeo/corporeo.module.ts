import { Module } from '@nestjs/common';
import { CorporeoService } from './corporeo.service';
import { CorporeoController } from './corporeo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corporeo } from './entities/corporeo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Corporeo])],
  controllers: [CorporeoController],
  providers: [CorporeoService],
  exports: [TypeOrmModule],
})
export class CorporeoModule {}
