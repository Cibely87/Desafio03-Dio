class hero {

    constructor(name, age, type) {
        name = this.name;
        age = this.age;
        type = this.type;
    }
}

attack() {

    let goAttack;

    switch (this.type) {
        case 'Mage':
            goAttack = 'Magic';
        case 'warrior':
            goAttack = 'sword';
        case 'monk':
            goAttack = 'martial arts';
        case 'ninja':
            goAttack = 'shuriken';
        default:
            goAttack = 'made an attack';
    }

    console.log(`The ${this.type}attacked using ${attack}`);
}

