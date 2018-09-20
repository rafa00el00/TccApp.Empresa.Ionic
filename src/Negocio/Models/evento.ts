export class Evento{
        public id:number;
        public nome:string;
        public descricaoSimples:string;
        public descricao:string;
        public tags:Array<string>;
        public dataEvento        :Date;
        public dataCriacao       :Date;
        public dataAtualizacao  :Date;
        public dataFimInscricao :Date;
        public publicoAlvo:string;
        public valor:number;


        public idEmpresa:number;
        public empresaNome:string;

        public cep :string;
        public logradouro :string;
        public numero :string;
        public complemento :string;
        public bairro :string;
        public cidade :string;
        public uF :string;
}