class heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "Mago": ataque = "Magia";
                break;
            case "Guerreiro": ataque = "Espada";
                break;
            case "Monge": ataque = "Artes Marciais";
                break;
            case "Ninja": ataque = "Shuriken";
                break;
            default:
                ataque = "Realizou um ataque"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroiPotiguar = new heroi("Joao", 26, "Guerreiro")
const heroiBaiano = new heroi("Severino", 55, "Ninja")
const heroiSergipano = new heroi("José", 39, "Monge")
const heroiPernambucano = new heroi("Francisco", 21, "Mago")


heroiPotiguar.atacar();
heroiBaiano.atacar();
heroiSergipano.atacar();
heroiPernambucano.atacar();

