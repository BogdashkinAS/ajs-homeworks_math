import Character from './character.js';

export default class Magician extends Character {
    constructor(name, attack) {
        super(name, attack);
        this.type = 'Magician';
      }
}
