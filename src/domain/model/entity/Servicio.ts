import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Establecimiento } from './Establecimiento';
import { Incidente } from './Incidente';

@Entity({ name: "servicioprestado" })
export class ServicioPrestado {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Establecimiento, (establecimiento) => establecimiento.servicios, { eager: true })
  @JoinColumn({ name: 'establecimiento_id', referencedColumnName: 'id' })
  establecimiento: Establecimiento;

  @OneToMany(type => Incidente, (incidente) => incidente.servicioIncidentado)
  incidentes: Incidente[];

}