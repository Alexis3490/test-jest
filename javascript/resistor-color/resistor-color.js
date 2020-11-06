//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColor {
  colors=["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Grey","White"]

  value (colors) {
    if(typeof colors !== 'string')
    {
      return 'Parameters colors is not type string'
    }
    if(this.colors.indexOf(colors) === -1)
    {
      return 'Colors not found in list colors'
    }
    else
    {
      return this.colors.indexOf(colors)
    }
  }
}
