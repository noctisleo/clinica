const prompt = require("prompt-sync")();

let consultas = [];

while (true) {

  console.log(`
1. Cadastrar consulta
2. Visualizar consultas
3. Atualizar consulta
4. Remover consulta
0. Sair
        `);

  let opcao = prompt("Qual opção deseja?");

  switch (opcao) {
    case "1":
        let consulta = {};

        consulta.paciente = prompt("Qual o nome do paciente?");
        consulta.medico = prompt("Qual o nome do medico?");
        consulta.data = prompt("Qual a data da consulta?");
        consulta.horario = prompt("Qual o horário da consulta?");

        consultas.push(consulta);
        console.log("Cadastrada com sucesso!");
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "0":
      break;

    default:
      console.log("Não entendi");
      break;
  }
}
