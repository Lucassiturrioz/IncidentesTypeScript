import { IncidenteController } from "./IncidenteController";
import { LoginController } from "./LoginController";
import { MenuController } from "./MenuController";


export class FactoryController {

    
    public static controller(nombre: string): any {
        let object = null;
    
        switch (nombre) {
          case "Menu":
            object = new MenuController(); break;
          case "Incidente":
            object = new IncidenteController(); break;
          case "Login":
            object = new LoginController(); break;    
        }
    
        return object;
      }
}
