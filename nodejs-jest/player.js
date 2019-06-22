class Player {
  constructor(name) {
    this.name = name
    this.points = 0
  }

  wonPoint() {
    this.points++
  }
}

export default Player