alert(
  "Boas vindas ao jogo adivinha, sua missão é adivinhar o mesmo número que a máquina!"
);
let numeroSecreto = 7;
let numeroUsuario;
let tentativas = 1;
//Enquanto
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Adivinhe o número, sabendo que é entre 1 e 10:");

  // Estrutura Condicional dentro do Enquanto
  {
    if (numeroUsuario == numeroSecreto) {
      alert(`Você acertou o número! com ${tentativas} tentativas`);
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
