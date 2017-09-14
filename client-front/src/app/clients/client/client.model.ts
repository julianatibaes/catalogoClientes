export interface Client {

    // dados de contato
    id?: Int32Array;
    nome: string;
    sobrenome?: string;
    nome_social?: string;
    telefone?: string;
    email?: string;

    // detalhes do contato
    cpf?: Int32Array;
    rg?: string;
    passaporte?: string;
    nacionalidade?: string;
    profissao?: string;
    endereco?: string;

    isRepresentante: boolean; // se ele fala por ele mesmo - true, se ele representa alguem - false

    // se representa pessoa física
    rgRepresentado?: string;
    dataNascimentoRepresentado?: Date;

    // se representa pessoa juridica
    nome_fantasia?: string;
    razao_social?: string;
    endereco_empresa?: string;

}
