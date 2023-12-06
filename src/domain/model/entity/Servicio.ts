import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { ServicioPrestado } from './ServicioPrestado';

@Entity({ name: "servicios" })
export class Servicios {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;  

  @OneToMany(type => ServicioPrestado, (servicioPrestado) => servicioPrestado.servicio)
  servicios: ServicioPrestado[];

  

}