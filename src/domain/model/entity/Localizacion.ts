import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Incidente } from './Incidente';

@Entity({ name: "localizacionbase" })
export class Localizacion {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;  

  @OneToMany(type => Incidente, (incidente) => incidente.localizacion)
  incidentes: Incidente[];

  

}