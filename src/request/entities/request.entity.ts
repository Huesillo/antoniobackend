import { Corporeo } from "src/corporeo/entities/corporeo.entity";
import { EventType } from "src/event-type/entities/event-type.entity";
import { RequestType } from "src/request-type/entities/request-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string
    
    @Column()
    telefono:string

    @Column()
    direccion:string

    @Column()
    date:string

    @Column()
    pilas:string

    @ManyToOne(() => RequestType, (requestType) => requestType.id,{eager : true})
    requestType: RequestType

    @ManyToOne(() => EventType, (eventType) => eventType.id,{eager : true})
    eventType: EventType

    @ManyToOne(() => Corporeo, (corporeo) => corporeo.id,{eager : true})
    corporeo: Corporeo

}
