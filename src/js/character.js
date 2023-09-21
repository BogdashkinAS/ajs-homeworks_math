export default class Character {
    constructor(name, attack) {
        this.name = name;
        this.attack = attack;
        this.stoned = false;
    }

    setAttack(x) {
        if (x > 10) {
            throw new Error('Данное число больше 10');
        } else {
            let count = this.attack;
            const proc = count / 10;
            for (let i = 0; i < x - 1; i += 1) {
                count -= proc;
            }
            this.attack = count;
        }
        return this.attack;
    }

    getAttack() {
        return this.attack;
    }

    getStoned() {
        return this.stoned;
    }

    setStoned(x) {
        this.stoned = true;
        this.setAttack(x);
        this.attack -= (Math.log2(x) * 5);
        return this.attack;
    }
}
