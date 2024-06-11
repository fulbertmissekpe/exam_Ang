import { Patient } from "../core/models/patient.model";
import { Service } from "./service";

export interface PatientService extends Service<Patient[]>{
    
}