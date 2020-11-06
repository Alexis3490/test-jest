import {ResistorColor} from './resistor-color'


describe('ResistorColor', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(new ResistorColor().value("Black")).toEqual(0)
    })
    test('Brown', () => {
      expect(new ResistorColor().value("Brown")).toEqual(1)
    })
    test('Red', () => {
      expect(new ResistorColor().value("Red")).toEqual(2)
    })
    test('Orange', () => {
      expect(new ResistorColor().value("Orange")).toEqual(3)
    })
    test('Yellow', () => {
      expect(new ResistorColor().value("Yellow")).toEqual(4)
    })
    test('Green', () => {
      expect(new ResistorColor().value("Green")).toEqual(5)
    })
    test('Blue', () => {
      expect(new ResistorColor().value("Blue")).toEqual(6)
    })
    test('Violet', () => {
      expect(new ResistorColor().value("Violet")).toEqual(7)
    })
    test('Grey', () => {
      expect(new ResistorColor().value("Grey")).toEqual(8)
    })
    test('White', () => {
      expect(new ResistorColor().value("White")).toEqual(9)
    })
    test('Error colors not found ', () => {
      expect(new ResistorColor().value("Dark Blue")).toEqual('Colors not found in list colors')
    })
    test('Error parameter color is not valid', () => {
      expect(new ResistorColor().value(['Blue'])).toEqual('Parameters colors is not type string')
    })
  })
})