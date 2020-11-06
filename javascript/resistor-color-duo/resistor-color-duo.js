export class ResistorColor {
  colors=[];
  list= ['black','brown','red','orange','yellow','green', 'blue','violet','grey','white']

  constructor(colors: string[]) {
    this.colors = colors;
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
  }

  value () {
    return +(
        this.list.indexOf(this.colors[0]).toString() +
        this.list.indexOf(this.colors[1])
    );
  }
}