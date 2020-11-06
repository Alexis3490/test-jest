//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class TwoFer {
  twoFer(name = 'you') {
    if(typeof name == 'string') {
      return `One for ${name}, one for me.`
    }
    else {
      return `Error parameters name is not type string`
    }
  }
}
module.exports=TwoFer