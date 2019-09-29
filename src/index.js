module.exports = function check(str, bracketsConfig) {
  let temp = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === str[i]) {
        if (temp.length && temp[temp.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][1] === str[i]) {
          temp = temp.slice(0, temp.length - 1);
        } else {
          temp += str[i];
        }
        
      } else if (bracketsConfig[j][1] === str[i] ) {
         if (temp[temp.length - 1] === bracketsConfig[j][0]) {
           temp = temp.slice(0, temp.length - 1);
         } else if (temp[temp.length - 1] !== bracketsConfig[j][0]) {
           return false;
         }
      }
    }
  }

  if (temp.length) {
    return false;
  }

  return true;
}


