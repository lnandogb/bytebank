import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//================= Instância de Novos Clientes =================

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const cliente3 = new Cliente("Luis Fernando", 12665898544);
const cliente4 = new Cliente("Cássio", 18265175118);

//================= Instância de Novas Contas =================

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
const contaCorrenteFernando = new ContaCorrente(cliente3, 1001);
const contaCorrenteCassio = new ContaCorrente(cliente4, 1001);

//==================== Movimentações ===============================

contaCorrenteRicardo.depositar(700); // Depósito
contaCorrenteRicardo.sacar(200); // Saque
contaCorrenteRicardo.transferir(150, contaCorrenteAlice); //Transferência
contaCorrenteAlice.transferir(35, contaCorrenteFernando);
contaCorrenteFernando.transferir(5, contaCorrenteCassio);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log(contaCorrenteFernando);
console.log(contaCorrenteCassio);

console.log("Total de contas:", ContaCorrente.numeroDeContas);