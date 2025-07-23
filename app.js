alert(
  "Boas vindas ao jogo adivinha, sua missão é adivinhar o mesmo número que a máquina!"
);
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroUsuario;
let tentativas = 1;
//Enquanto
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt(
    `Adivinhe o número, sabendo que é entre 1 e ${numeroMaximo}:`
  );

  // Estrutura Condicional dentro do Enquanto
  {
    if (numeroUsuario == numeroSecreto) {
      break;
    } else {
      alert(`Você perdeu! Já foram ${tentativas} tentativas`);
      if (numeroSecreto > numeroUsuario) {
        alert(`O número secreto é maior que ${numeroUsuario}`);
      } else if (numeroSecreto < numeroUsuario) {
        alert(`O número secreto é menor que ${numeroUsuario}`);
      }
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você acertou o número! com ${tentativas}  ${palavraTentativa}.`);
