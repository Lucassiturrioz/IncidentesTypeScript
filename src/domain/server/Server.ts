import { Application } from 'express';
import {Liquid} from 'liquidjs';
import session from 'express-session';
import { Router } from './Router';
import path = require('path');

export class Servidor {
    public static app: Application | null = null;
    private static  express  = null;


    public static iniciar(): void {
        if (this.app === null) {
            this.express = require('express')
            this.app = this.express()
            this.initTemplateEngine();
            Router.init()
            this.configureStaticFiles()

        }
    }

    private static initTemplateEngine( ): void {
        const engine = new Liquid({
            extname: '.liquid', // Extensión de archivos de plantilla
            root: ['./views'], // Directorio de vistas
        });
        this.app.engine('liquid', engine.express());
        this.app.set('views', './views');
        this.app.set('view engine', 'liquid');
        this.app.use(this.express.urlencoded({ extended: true }));
        const session = require('express-session');    
        this.app.use(
            session({
                secret: 'true',
                saveUninitialized: false,
                resave: false,
            })
        );
    }

    public static getApp(): Application {
        if (this.app === null) {
            throw new Error('App not initialized');
        }
        return this.app;
    }

    private static configureStaticFiles(): void {

        const publicPath = path.join(__dirname, '../../../static');
        this.app.use('/static', this.express.static(publicPath));
    }
}

