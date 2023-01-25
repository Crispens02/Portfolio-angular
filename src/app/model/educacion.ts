export class Educacion {
    id? : number;
    nombreE : string;
    descripcionE : string;
    imgE : string;
    fechaInicio : Date;
    fechaFinal : Date;

    constructor(nombreE: string, descripcionE: string, imgE: string,fechaInicio:Date, fechaFinal: Date ) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.fechaInicio= fechaInicio
        this.fechaFinal= fechaFinal
        
    }
}