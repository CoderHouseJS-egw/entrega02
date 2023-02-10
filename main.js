let idade = prompt(
  "Votar é um direito e também um dever de cidadão. DIGITE SUA IDADE: "
);

if ((idade >= 16 && idade < 18) || idade > 70) {
  alert(
    "Você não é obrigado a votar, pois tem menos de 18 anos ou mais que 70 anos."
  );
} else if (idade < 16 && idade >= 0) {
  alert(
    "Você ainda não pode votar. Ao completar 16 anos, poderá tirar seu título de eleitor."
  );
} else if (idade < 0) {
  alert("Ops! Acho que você ainda não nasceu. Digite novamente.");
} else if (idade >= 18 && idade <= 70) {
  alert(
    "Você precisa ir votar. Todos os cidadãos entre 18 e 70 anos precisam votar."
  );
} else {
  alert("Valor inválido");
}

function recarregarAPagina() {
  window.location.reload();
}
