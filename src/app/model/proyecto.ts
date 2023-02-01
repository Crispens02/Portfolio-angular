export class Proyecto {
        id? : number;
        nombreP : string;
        imgP : string;
       linkP: string;
        constructor(nombreP: string,  imgP: string,  linkP: string) {
            this.nombreP = nombreP;
            this.imgP = imgP;
            this.linkP = linkP;
            
        }
    }