import { PartialType } from '@nestjs/mapped-types';
import { CreateCorporeoDto } from './create-corporeo.dto';

export class UpdateCorporeoDto extends PartialType(CreateCorporeoDto) {}
