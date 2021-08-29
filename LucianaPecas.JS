
//Projeto 2: Sistema Cadastro de Peças 

//lista de peças para o cadastro
var Catalogo_de_Pecas = ["Bobina de Suspensão", "Disco de Freio", "Bateria"]

// Verificando se o comprimento da lista de peças possui menos de 10 itens, se sim , é possivel cadastrar mais peças.
if (Catalogo_de_Pecas.length < 100) {

    // Cofirmação de para cadastro ou não.
    console.log("A lista ainda está em aberto, é possivel cadastrar uma nova peça.")
} else {
    // Informar que a lista não possui mais espaço para cadastrar peças.
    console.log("Não existe espaço Suficiente para cadastrar uma nova peça.");
}
let peso = 50;

// condição para o cadastro.
if (peso < 100) {
    console.log("A peça deve pesar no minimo 100g.")
} else {
    console.log("A peça possui peso adequado para o cadastro.")
}

let NomePeça = "casa";

if (NomePeça.length > 3) {
//    console.log("nome da peça está adequado para o cadastro!")
} else if(NomePeça.length == 0) {
    console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}

  switch (NomePeça.length) {
    case 0:

        default:
            console.log("Nome da peça está adequado para o cadastro!")
            break;
}
