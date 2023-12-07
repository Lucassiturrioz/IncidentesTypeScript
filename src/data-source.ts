import "reflect-metadata"
import { DataSource } from "typeorm"
import { Persona } from "./domain/model/entity/Persona"
import { Comunidad } from "./domain/model/entity/Comunidad"
import { Miembro } from "./domain/model/entity/Miembro"
import { Incidente } from "./domain/model/entity/Incidente"
import { ComunidadAbrioIncidente } from "./domain/model/entity/ComunidadAbrioIncidente"
import { ServicioPrestado } from "./domain/model/entity/ServicioPrestado"
import { Establecimiento } from "./domain/model/entity/Establecimiento"
import { Servicios } from "./domain/model/entity/Servicio"
import { Localizacion } from "./domain/model/entity/Localizacion"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cll3oa4jtl8s73f71qog-a.oregon-postgres.render.com",
    port: 5432,
    username: "base_f5mi_user",
    password: "Jt6ImpAjMYJntAKVjsk1WlUwPzgYm0jT",
    database: "base_f5mi",
    synchronize: false,
    logging: false,
    entities: [Persona, Comunidad, Miembro,Incidente,ComunidadAbrioIncidente, Incidente, ServicioPrestado, Establecimiento, Servicios, Localizacion],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false, // You might need to adjust this based on your certificate setup
      },
    
})
