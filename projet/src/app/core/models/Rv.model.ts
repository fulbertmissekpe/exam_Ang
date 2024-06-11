export interface Rv{
    id:number,
    patient:string,
    medecin:string,
    dateHeure:Date,
    specialite:Specialite
}

export enum Specialite{
    Dentaire,Generaliste,Cardioloque,Pediatrie,Ophta
}

export interface RvCreate{
    patient:string,
    medecin:string,
    dateHeure:String,
    specialite:String
}