function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 20
};

const pessoa2 = {
	nome: "Julia",
	idade: 38
};

const animal = {
	nome: "Mel",
	idade: 3,
	raca: "pug"
};

console.log(calculaIdade.apply(pessoa1, [6]));