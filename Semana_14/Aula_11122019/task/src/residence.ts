import { Place } from "./place";

export class Residence extends Place {

  public resName: string;
  public cpf: string;
  public cep: string;
  

  constructor(resName: string, cpf: string, cep: string) {
    super(cep);
    this.resName = resName;
    this.cpf = cpf;
  }
}
