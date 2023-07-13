import { Module } from '@nestjs/common';
import { RequestTypeService } from './request-type.service';
import { RequestTypeController } from './request-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestType } from './entities/request-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RequestType])],
  providers: [RequestTypeService],
  controllers: [RequestTypeController],
  exports: [TypeOrmModule],
})
export class RequestTypeModule {}
