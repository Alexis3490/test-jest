//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function helloWorld(name = 'World') {
  if(typeof name === 'string') {
    if (name === 'Majdi') {
      return 'Yooooo!';
    }
    else {
      return `Hello, ${name}!`;
    }
  }
  else{
    return 'Error parameters name is not type string'
  }
}
