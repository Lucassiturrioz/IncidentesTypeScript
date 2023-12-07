import { FactoryController } from "../controller/FactoryController";
import { Servidor } from "./Server";


export class Router {

    public static init() : void{

         
    Servidor.app.get('/', (req, res) => { FactoryController.controller('Menu').main(req,res); });
    Servidor.app.get('/index', (req, res) => { FactoryController.controller('Menu').index(req,res)} )


    Servidor.app.get('/login', (req, res) => { FactoryController.controller('Login').show(req,res); });
    Servidor.app.post('/login',  (req, res) => { FactoryController.controller('Login').manejarInicioSesion(req,res); })
    Servidor.app.get('/cerrar-sesion', (req, res) => { FactoryController.controller('Login').manejarCierreSesion(req,res); } )    

    Servidor.app.get('/incidentes', (req, res) => { FactoryController.controller('Incidente').show(req,res)} )
   


    }


}
