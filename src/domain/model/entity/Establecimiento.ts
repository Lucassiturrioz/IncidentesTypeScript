import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Miembro } from './Miembro';
import {ServicioPrestado } from './ServicioPrestado';

@Entity({ name: "establecimientos" })
export class Establecimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => ServicioPrestado, (servicio) => servicio.establecimiento)
  servicios: ServicioPrestado[];
  
}