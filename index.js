const prompt = require("prompt-sync")();

let consultas = [
    {
        paciente: "Joaquim",
        medico: "Joaquim",
        data: "01/01/1953",
        horario: "10:00"
    }, {
        paciente: "Joaquim",
        medico: "Joaquim",
        data: "01/01/1953",
        horario: "10:00"
    }
];

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
    case "2", "4":
        consultas.forEach(function(consulta, indice) {
            console.log(`
Consulta ${indice + 1}:
Paciente: ${consulta.paciente}
Medico: ${consulta.medico}
Data: ${consulta.data}
Horário: ${consulta.horario}1
                `)
        })
        if(opcao == '4') {
            console.log("Aqui")
            let indice = prompt("Escolha uma consulta");
            consultas.splice(indice - 1, 1)
        }
      break;
    case "3":
      break;
    case "0":
      break;

    default:
      console.log("Não entendi");
      break;
  }
}
