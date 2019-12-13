import { Place } from "./place";

export class Trade extends Place {

  public comName: string;
  public cnpj: string;
  
  constructor(comName: string, cnpj: string, cep: string) {
    super(cep);
    this.comName = comName;
    this.cnpj = cnpj;
  }
}
