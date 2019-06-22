import Player from './player'

describe('Player', () => {
  test('player has default values', () => {
    const player = new Player('player1')

    expect(player.points).toEqual(0)
    expect(player.name).toEqual('player1')
  })

  test("player's point has incremented", () => {
    const player = new Player('player1')

    player.wonPoint()
    player.wonPoint()
    player.wonPoint()

    expect(player.points).toEqual(3)
  })
})
