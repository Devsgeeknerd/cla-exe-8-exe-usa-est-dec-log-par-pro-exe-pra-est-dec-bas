// Declaração de uma variável 'letraUsuario' do tipo string com valor 'a'.
let letraUsuario: string = "a";

// Verifica se a 'letraUsuario' é igual a uma das vogais: 'a', 'e', 'i', 'o' ou 'u'.
if (
  letraUsuario == "a" ||
  letraUsuario == "e" ||
  letraUsuario == "i" ||
  letraUsuario == "o" ||
  letraUsuario == "u"
) {
  // Se a condição for verdadeira, imprime uma mensagem indicando que a letra é uma vogal.
  console.log("Sua letra é uma vogal!");
} else {
  // Se a condição for falsa, imprime uma mensagem indicando que a letra é uma consoante.
  console.log("Sua letra é uma consoante!");
}
