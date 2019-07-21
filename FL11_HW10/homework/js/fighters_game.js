class Fighter {
    constructor({name, damage, hp, agility}) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._agility = agility;
        this._win = 0;
        this._loss = 0;
    }
    get name() {
        return this._name;
    }
    get damage() {
        return this._damage;
    }
    get health() {
        return this._hp;
    }
    get agility() {
        return this._agility;
    }
    attack(defender) {
        let percentAttack = 100;
        let succesAttack = percentAttack - defender._agility;
        let probability = Math.floor(Math.random() * percentAttack);
        if (probability <= succesAttack) {
            defender.dealDamage(this._damage);
            console.log(`${this._name} make ${this._damage} damage to ${defender.name}`);
        } else {
            console.log(`${this._name} attack missed`);
        }
    }
    logCombatHistory() {
        let history = `Name: ${this._name}, Wins: ${this._win}, Losses: ${this._loss}`;
        return console.log(history);
    }
    heal(fighterHP) {
        let fullFighterHP = 100;
        let currentFighterHP = this._hp;
        let resultFighterHP = fighterHP + currentFighterHP;
        if (resultFighterHP <= fullFighterHP) {
            this._hp += fighterHP;
        } else {
            console.log(`Your maximum level of health ${this._hp = fullFighterHP}`);
        }
    }
    dealDamage(damage) {
        this._hp = this._hp - damage;
        if (this._hp < 0) {
            this._hp = 0;
        } else {
            this._hp - damage;
        }
    }
    addWin() {
		let score = this._win += 1;
        return score;
    }
    addLoss() {
        let score = this._loss += 1;
        return score;
    }
}

function battle(firstFighter, secondFighter) {
    while (firstFighter._hp > 0 && secondFighter._hp > 0) {
        if (firstFighter._hp > 0 || secondFighter._hp > 0) {
            firstFighter.attack(secondFighter);
        } else {
            '';
        } 
        if (firstFighter._hp > 0 || secondFighter._hp > 0) {
            secondFighter.attack(firstFighter);
        } else {
            '';
        }
        if (firstFighter._hp === 0) {
            console.log(`${firstFighter._name} is dead and can't fight!`);
        } else {
            '';
        }
        if (secondFighter._hp === 0) {
            console.log(`${secondFighter._name} is dead and can't fight!`);
        } else {
            '';
        }
    }
    if (firstFighter._hp > 0) {
        firstFighter.addWin();
    } else {
        firstFighter.addLoss();
    }
    if (secondFighter._hp > 0) {
        secondFighter.addWin();
    } else {
        secondFighter.addLoss();
    }
}

let fighter1 = new Fighter({name: 'Iron Man', damage: 15, hp: 100, agility: 25});
let fighter2 = new Fighter({name: 'Thanos', damage: 10, hp: 100, agility: 35});