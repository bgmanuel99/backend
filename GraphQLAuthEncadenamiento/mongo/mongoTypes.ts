export interface TaskSchema {
    _id: { $oid: string };
    id: number;
    nombre: string;
    descripcion?: string;
    fechaDeFinalizacion: Date;
    state: string;
}

export interface UserSchema {
  firstName: string,
  lastName: string,
  id: number,
  friends: string[],
}