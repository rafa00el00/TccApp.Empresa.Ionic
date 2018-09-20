import { Pagamento } from "./pagamento";

export class Compra {

    public id: number
    //objeto venda
    public itemId: string
    public descricao: string
    public valor: number
    public qtd: number
    public dataEvento: Date
    public dataCompra: Date
    public guidCompra: string

    //status
    public codStatus: number
    public descricaoStatus: string

    //vendedor
    public guidempresa: string
    public nomeempresa: string

    //pagamento
    public pagamento: Pagamento;
}