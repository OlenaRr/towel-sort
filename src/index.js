
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return []}
  let answ = []
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
          matrix[i].sort(function(a, b){return a - b});
          for (let n = 0; n < matrix[i].length; n++) {answ.push(matrix[i][n])};
      } else {
          matrix[i].sort(function(a, b){return b - a});
          for (let n = 0; n < matrix[i].length; n++) {answ.push(matrix[i][n])};
      }
  }
  return answ;
}
