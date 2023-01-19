export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    colorinterior: string;
    colorexterior: string;
    img: string;

    constructor(nombre:string, porcentaje: number, colorinterior: string, colorexterior: string, img: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.colorinterior = colorinterior;
        this.colorexterior = colorexterior;
        this.img = img;
    }
}