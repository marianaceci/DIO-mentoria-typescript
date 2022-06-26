let anyEstaDeVolta: any; // --> má prática
let unknownValue: unknown; // --> boa prática -> variável de tipo desconhecido (necessário fazer verificação para tratá-la da maneira correta)

let stringTest: string = 'agora vai';
//stringTest = unknownValue;

if (typeof unknownValue === 'string') {
    stringTest = unknownValue;
}


// never: código que nunca é finalizado/ encerrado abruptamente
//throw: interrompeu o fluxo do código
function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo};
}

jogaErro('deu ruim', 500)