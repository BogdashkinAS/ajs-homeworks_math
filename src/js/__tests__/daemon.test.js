import Daemon from '../daemon.js';

test('Make personage Daemon', () => {
  const unit = new Daemon('John', 100);
  expect(unit).toEqual({
 name: 'John', attack: 100, stoned: false, type: 'Daemon',
});
});

test('Use setAttack with attack 100 on 2 cells', () => {
    const unit = new Daemon('John', 100);
    unit.setAttack(2);
    expect(unit).toEqual({
 name: 'John', attack: 90, stoned: false, type: 'Daemon',
});
});

test('Use setAttack with very more cells', () => {
  const unit = new Daemon('John', 100);
  expect(() => unit.setAttack(11)).toThrow('Данное число больше 10');
});

test('Use getAttack', () => {
  const unit = new Daemon('John', 80);
  unit.getAttack();
  expect(unit.attack).toBe(80);
});

test('Use getStoned', () => {
  const unit = new Daemon('John', 80);
  unit.getStoned();
  expect(unit.stoned).toBeFalsy();
});

test('Use setStoned', () => {
  const unit = new Daemon('John', 100);
  unit.setStoned(2);
  expect(unit).toEqual({
 name: 'John', attack: 85, stoned: true, type: 'Daemon',
});
});
