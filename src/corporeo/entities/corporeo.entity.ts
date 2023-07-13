import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Corporeo {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
}
