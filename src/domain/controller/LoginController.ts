import { Persona } from "../model/entity/Persona";
import { AppDataSource } from "./../../data-source"


export class LoginController {

    public show(req, res) : void{
        if(req.session.correoElectronico == undefined) {
            res.render('login');
        } else {
            res.redirect('index');
        }
    }

   



    public async manejarInicioSesion(req, res): Promise<void> {
      
          const { correoelectronico, contrasenia } = req.body

          const userRepository = AppDataSource.getRepository(Persona)
          const usuario = await userRepository.findOneBy({ correoelectronico : correoelectronico , contrasenia : contrasenia })

  
          if (usuario) {
            req.session.correoelectronico = correoelectronico
            req.session.userId  = usuario.id
            req.session.save()
      
            res.redirect('/index');
          } else {
            req.correoElectronico = undefined;
            req.id = undefined;
            res.redirect('/login');
          }
       
    }

    public async manejarCierreSesion(req, res): Promise<void> {
      req.session.destroy()
      delete req.correoelectronico;
      delete req.id;
      res.redirect('/login');
    }
}
