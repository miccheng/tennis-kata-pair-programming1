export class Player {
  public name: string
  public points: number

  constructor(name: string) {
    this.name = name
    this.points = 0
  }

  incrementPoint(point: number = 1) {
    this.points += point;
  }
}