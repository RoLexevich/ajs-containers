import Team from '../app';

const bowerman = {
  type: 'Bowerman',
  name: 'Robin',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
const daemon = {
  type: 'Daemon',
  name: 'Bobin',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('добавление игрока', () => {
  const player = bowerman;
  const team = new Team();
  team.add(player);
  const recieved = team.members.has(player);
  expect(recieved).toBe(true);
});

test('добавление существующего игрока', () => {
  const player = daemon;
  const team = new Team();
  team.add(player);
  expect(() => team.add(player)()).toThrow();
});

test('добавление двух игроков', () => {
  const player1 = bowerman;
  const player2 = daemon;
  const team = new Team();
  team.addAll(player1, player2);
  const recieved1 = team.members.has(player1);
  const recieved2 = team.members.has(player2);
  expect(recieved1 && recieved2).toBe(true);
});

test('конвертация в массив', () => {
  const player1 = bowerman;
  const player2 = daemon;
  const team = new Team();
  team.addAll(player1, player2);
  team.toArray();
  expect(team.members).toEqual([bowerman, daemon]);
});
