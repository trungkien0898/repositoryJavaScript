export function character(name, HP, attackPower, defense) {
    this.name = name;
    this.HP = HP;
    this.attackPower = attackPower;
    this.defense = defense;
    //Expretion function
    this.attack = (target) => {let damage = Math.max(this.attackPower - target.defense, 0);
        target.HP -= damage;
        return `${this.name} phang ${target.name} mat ${damage} HP. ${target.name} con ${target.HP} HP`;
    };
    //Arow function
    this.isAlive = () => {
        return this.HP > 0;
    };
}