import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { EventType } from './entities/event-type.entity';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectRepository(EventType)
    private eventTypeRepository: Repository<EventType>,
  ) {}

  async create(eventTypeData:EventType):Promise<EventType> {
    const EVENTTYPE = this.eventTypeRepository.create(eventTypeData);
    await this.eventTypeRepository.save(EVENTTYPE);
    return EVENTTYPE
  }
  findAll(): Promise<EventType[]> {
    return this.eventTypeRepository.find();
  }

  findOne(id: number): Promise<EventType | null> {
    return this.eventTypeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.eventTypeRepository.delete(id);
  }
}
