const twofer = require('./two-fer');

describe('twoFer()', () => {
  test('no name given', () => {
    expect(new twofer().twoFer()).toEqual("One for you, one for me.")
  })
  test('given name', () => {
    expect(new twofer().twoFer('Blob')).toEqual("One for Blob, one for me.")
  })
  test('parameter name is invalid type', () => {
    expect(new twofer().twoFer(['Blob'])).toEqual("Error parameters name is not type string")
  })
})
