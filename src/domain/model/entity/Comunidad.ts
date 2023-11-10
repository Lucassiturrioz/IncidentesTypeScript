import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Miembro } from './Miembro';
import { ComunidadAbrioIncidente } from "./ComunidadAbrioIncidente";

@Entity()
export class Comunidad {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @OneToMany(type => Miembro, (miembro) => miembro.comunidad)
    miembros: Miembro[];

    @OneToMany(type => ComunidadAbrioIncidente, (comunidadAbrioIncidente) => comunidadAbrioIncidente.comunidad, { eager: true })
    incidentes: ComunidadAbrioIncidente[];

}
