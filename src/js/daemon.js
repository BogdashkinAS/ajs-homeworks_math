import Character from './character.js';

export default class Daemon extends Character {
    constructor(name, attack) {
        super(name, attack);
        this.type = 'Daemon';
      }
}
