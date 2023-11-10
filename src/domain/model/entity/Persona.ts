import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Miembro } from './Miembro';

@Entity({ name: "persona" })
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correoElectronico: string;

  @Column()
  contrasenia: string;

  @Column()
  numeroTelefono: string;

  @OneToMany(type => Miembro, (miembro) => miembro.persona)
  comunidades: Miembro[];
  
  // Otras propiedades como Interes, LocalizacionBase, Notificacion, GradoDeConfianza, Foto, etc.

  // Otras relaciones como Interes, Foto, Rol, etc.

  // Constructor y métodos si es necesario
}