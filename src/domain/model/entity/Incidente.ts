import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { ComunidadAbrioIncidente } from "./ComunidadAbrioIncidente"
import { ServicioPrestado } from "./Servicio"

@Entity({ name: "incidente" })
export class Incidente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    motivo_incidente : string

    @Column()
    resuelto : boolean

    @OneToMany(type => ComunidadAbrioIncidente, (comunidadAbrioIncidente) => comunidadAbrioIncidente.incidente)
    comunidadesAbrieronElIncidente : ComunidadAbrioIncidente[];

    @ManyToOne(() => ServicioPrestado, (servicio) => servicio.incidentes, { eager: true })
    @JoinColumn({ name: 'servicioPrestado_id' })
    servicioIncidentado: ServicioPrestado;
}
