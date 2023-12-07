import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Persona } from "./Persona"
import { Comunidad } from "./Comunidad"
import { ComunidadAbrioIncidente } from "./ComunidadAbrioIncidente"

@Entity()
export class Miembro {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Persona, (persona) => persona.comunidades)
    @JoinColumn({ name: "persona_id", referencedColumnName: "id" })
    persona : Persona

    @ManyToOne(() => Comunidad, (comunidad) => comunidad.miembros, { eager: true })
    @JoinColumn({ name: "miembros", referencedColumnName: "id" })
    comunidad : Comunidad



}
