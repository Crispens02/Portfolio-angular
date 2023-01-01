export class Persona {
    idpersona?: number;
    nombre: string;
    apellido: string;
    domicilio: string;
    telefono: string;
    correo: string;
    sobreMi: string;
    puesto: string;
    urlFoto: string; //Foto de perfil
    urlLd: string;
    urlGithub: string;
    urlQrLd: string;
    urlFotoBanner: string;
    urlAP: string;
    urlFotoAP: string;
    urlLogin: string;
    urlLogoPortfolio: string;
    urlFotoContacto: string;

    
    constructor (nombre: string, apellido: string, domicilio: string, telefono: string, correo: string, urlLd: string, sobreMi: string, urlFoto: string, puesto: string, urlQrLd: string, urlGithub: string,urlFotoBanner: string, urlAP: string, urlFotoAP: string, urlLogin: string, urlLogoPortfolio: string, urlFotoContacto: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.correo = correo;
        this.sobreMi = sobreMi;
        this.puesto = puesto;
        this.urlFoto = urlFoto;
        this.urlLd = urlLd;
        this.urlQrLd = urlQrLd;
        this.urlGithub = urlGithub;
        this.urlFotoBanner = urlFotoBanner;
        this.urlAP = urlAP;
        this.urlFotoAP = urlFotoAP;
        this.urlLogin = urlLogin;
        this.urlLogoPortfolio = urlLogoPortfolio;
        this.urlFotoContacto = urlFotoContacto;

    }
    
}