export class Medico{
    Codigo!: number;
    Nome: string;
    DataNascimento: string;
    CRM: string;

    constructor(){
        this.Nome = "";
        this.DataNascimento = "";
        this.CRM = "";
    }
}