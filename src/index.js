module.exports = function check(str, bracketsConfig) {
  let map = toMap(bracketsConfig);

  let stack = [];

  for (let char of str) {
    if (map[char]) {

      if (char == map[char]) {

        if (stack[stack.length - 1] === char) {
          stack.pop();
        } 
        else {
          stack.push(char);
        }

      } 

      else {
        stack.push(char);
      }

    }
    
    else {
      if (stack.length === 0) {
        return false;
      }
      
      let key = stack[stack.length - 1];
      if (map[key] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}

function toMap(config) {
  let map = {};
  
  for (let rule of config) {
    let key = rule[0];
    let value = rule[1];
    map[key] = value;
  }
  
  return map;
}
