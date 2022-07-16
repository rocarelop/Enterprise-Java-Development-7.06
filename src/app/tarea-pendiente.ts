export class TareaPendiente {
  public nombre: string;
  public terminada: boolean;

  constructor(nombre: string, terminada?:boolean) {
    this.nombre = nombre;
    this.terminada = terminada? terminada: false;
  }
}
