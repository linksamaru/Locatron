import { Cita } from '../Citas/Cita';
export class Usuario {
  nombre: string;
  usuario: string;
  password: string;
  citas?: Cita[];
}
