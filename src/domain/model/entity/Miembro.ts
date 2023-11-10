import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm"
import { Persona } from "./Persona"
import { Comunidad } from "./Comunidad"

@Entity()
export class Miembro {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Persona, (persona) => persona.comunidades)
    
    persona : Persona

    @ManyToOne(() => Comunidad, (comunidad) => comunidad.miembros)
    comunidad : Comunidad


}
