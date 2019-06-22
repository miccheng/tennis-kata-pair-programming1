import { Player } from '../src/Player';
import { expect } from 'chai';

describe('Player', () => {
  it('should create player with name', () => {
    const player = new Player("Test Player");

    expect(player.name).to.be.equals("Test Player");
  })

  it('should have a default score of 0', () => {
    const player = new Player("Test Player");

    expect(player.points).to.be.equals(0);
  })

  it('should increment the point', () => {
    const player = new Player("Test Player");
    player.incrementPoint()
    player.incrementPoint()
    player.incrementPoint()

    expect(player.points).to.be.equals(3);
  })
})