class Fighter {
    constructor(name, damage, hp, agility) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._agility = agility;
        this._win = 0;
        this._loss = 0;
    }
    get Name() {
        return this._name;
    }
    get Damage() {
        return this._damage;
    }
    get Agility() {
        return this._agility;
    }
    get Health() {
        return this._hp;
    }
    attack() {

        // not complete
        // if () {
            
        // }

        console.log(`${this._name} make ${this._damage} damage to ${this._name}`);
    }
    logCombatHistory() {
        console.log(`${this._name}, Wins: ${this._win}, Losses: ${this._loss}`);
    }
    heal() {
        if (this._hp >= 0 || this._hp <= 100) {
            this._hp++;
        }
    }
    dealDamage() {
        if (this._hp >= 0 && this._hp <= 100) {
            this._damage--;
        }
    }
    addWin() {
        this._win++;
    }
    addLoss() {
        this._loss--;
    }
}



let myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});