import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RequestType {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string
}
