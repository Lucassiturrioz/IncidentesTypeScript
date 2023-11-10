import { AppDataSource } from "./data-source"
import { Persona } from "./domain/model/entity/Persona";
import { Servidor } from "./domain/server/Server";


AppDataSource.initialize().then(async () => {


   
   Servidor.iniciar()
        
   Servidor.app.listen(3000)

    

}).catch(error => console.log(error))
