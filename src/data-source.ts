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


export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    synchronize: false,
    logging: false,
    entities: [Persona, Comunidad, Miembro,Incidente,ComunidadAbrioIncidente, Incidente, ServicioPrestado, Establecimiento, Servicios],
    migrations: [],
    subscribers: [],
})
