const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let Answer = [""]
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined;
  } else {
    for (const item of arrayOfString) {
      if(item.length > Answer[0].length){
        Answer[0] = item
      }else if(item.length === Answer[0].length){
        Answer.push(item)
      }
    }
    return Answer
  }
}
// console.log(getMaxLengthString(["hello", "hi", "hey"]))
// console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']))
module.exports = getMaxLengthString

