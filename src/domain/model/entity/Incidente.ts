import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { ComunidadAbrioIncidente } from "./ComunidadAbrioIncidente"
import { ServicioPrestado } from "./ServicioPrestado"
import { Localizacion } from "./Localizacion"

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
    @JoinColumn({ name: 'servicioprestado_id' })
    servicioIncidentado: ServicioPrestado;


    @ManyToOne(() => Localizacion, (localizacion) => localizacion.incidentes, { eager: true })
    @JoinColumn({ name: 'localizacion_id' })
    localizacion: Localizacion;


}
