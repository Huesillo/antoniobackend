import { Perfil } from 'src/perfil/entities/perfil.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  rut: string;

  @Column()
  address:string

  @Column()
  password: string;

  @Column()
  correo: string;

  @Column()
  n_contacto: string;

  @ManyToOne(() => Perfil, (perfil) => perfil.id,{eager : true})
  @JoinColumn()
  perfil: Perfil
}