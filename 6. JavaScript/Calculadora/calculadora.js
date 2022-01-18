function calculadora() {
    const operacao = Number (prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if (!operacao || operacao >= 7 ) {
        alert('ERRO: Operação inválida')
        calculadora();
    } else {
        let n1 = Number (prompt('insira o primeiro valor'));
    let n2 = Number (prompt('insira o segundo valor'));
    let resultado;

    if(!n1 || !n2) {
       alert('ERRO: Opção inválida') 
       calculadora();
    } else {
      function soma() {
     resultado = n1 + n2; 
     alert(`${n1} + ${n2} = ${resultado}`);
     novaOperacao();
    }
    function subtração() {
     resultado = n1 - n2; 
     alert(`${n1} - ${n2} = ${resultado}`);
     novaOperacao();
    }
    function multiplicação() {
     resultado = n1 * n2; 
     alert(`${n1} * ${n2} = ${resultado}`);
     novaOperacao();
    }
    function divisãoReal() {
     resultado = n1 / n2; 
     alert(`${n1} / ${n2} = ${resultado}`);
     novaOperacao();
    }
    function divisãoInteira() {
     resultado = n1 % n2; 
     alert(`o resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`);
     novaOperacao();
    }
    function potenciação() {
     resultado = n1 ** n2; 
     alert(`${n1} elevado a ${n2}ª potência é igual a ${resultado}`);
     novaOperacao();
    }

    function novaOperacao() {
      let opção = prompt('deseja fazer nova operação?\n 1 - Sim\n 2 - Não');

      if (opção == 1) {
          calculadora();
      } else if (opção == 2) {
          alert('Até mais!');
      } else {
          alert('Digite uma opção válida');
          novaOperacao();
        }
    }
}

    


/* if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtração();
} else if (operacao == 3) {
    multiplicação()
} else if (operacao == 4){
    divisãoReal()
} else if (operacao == 5) {
    divisãoInteira()
} else if (operacao == 6) {
    potenciação()
} */

switch (operacao) {
    case 1:
        soma();
        break;
        case 2:
             subtração();
           break;
           case 3:
                multiplicação();
                break;
                case 4:
                     divisãoReal();
                     break;
                     case 5:
                          divisãoInteira();
                          break;
                          case 6:
                               potenciação();
                               break;            

    
}

    }
}

calculadora();