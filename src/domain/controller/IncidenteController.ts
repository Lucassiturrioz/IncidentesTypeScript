import { AppDataSource } from "../../data-source";
import { Persona } from "../model/entity/Persona";

export class IncidenteController {

    public async show(req, res) : Promise<void>{

        const id = req.session.userId
        const userRepository = AppDataSource.getRepository(Persona)
        const usuario = await userRepository.findOneBy(id)


        const model = {
            // Tu modelo de datos aquí
            usuario : usuario
        };

        res.render('incidentes',model);
    }

}
