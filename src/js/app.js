export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Такой персонаж уже есть');
    } else {
      this.members.add(player);
    }
  }

  addAll(...player) {
    player.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
