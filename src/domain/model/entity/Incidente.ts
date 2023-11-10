import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ComunidadAbrioIncidente } from "./ComunidadAbrioIncidente"

@Entity()
export class Incidente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    motivoIncidente : string

    @Column()
    resuelto : boolean

    @OneToMany(type => ComunidadAbrioIncidente, (comunidadAbrioIncidente) => comunidadAbrioIncidente.incidente)
    comunidadesAbrieronElIncidente : ComunidadAbrioIncidente[];

}
