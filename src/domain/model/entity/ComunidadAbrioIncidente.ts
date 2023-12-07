import { Entity, Column, ManyToOne, PrimaryColumn, Index, JoinColumn } from "typeorm"
import { Comunidad } from "./Comunidad"
import { Incidente } from "./Incidente"
import 'reflect-metadata'
import { Miembro } from "./Miembro";

@Entity({ name: "comunidadesabrieronincidente" })
export class ComunidadAbrioIncidente {

  @PrimaryColumn({ name: 'comunidad_id' })
  comunidadId: number;

  @PrimaryColumn({ name: 'incidente_id' })
  incidenteId: number;

  @ManyToOne(() => Comunidad, comunidad => comunidad.incidentes)
  @JoinColumn({ name: 'comunidad_id', referencedColumnName: 'id' })
  comunidad: Comunidad;

  @ManyToOne(() => Incidente, incidente => incidente.comunidadesAbrieronElIncidente, { eager: true })
  @JoinColumn({ name: 'incidente_id', referencedColumnName: 'id' })
  incidente: Incidente;

  @Column()
  Fecha_De_Cierre_Comunidad : Date

  @Column()
  fue_resuelto_por_comunidad : boolean


}
