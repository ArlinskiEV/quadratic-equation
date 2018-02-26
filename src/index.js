module.exports = function solveEquation(equation) {
  // your implementation
  // a*x^2+b*x+c
  let str = equation.replace(/[ ]+/g, '');
  let aIndex = str.search(/^-?\d+\*x\^2/);
  let bIndex = str.search(/[-,+]?\d+\*x[-,+]/);
  let cIndex = str.search(/[-,+]?\d+$/);

  let aString = str.slice(aIndex);
  let bString = str.slice(bIndex);
  let cString = str.slice(cIndex);

  let a = parseInt(aString);
  let b = parseInt(bString);
  let c = parseInt(cString);

  let d = Math.sqrt((b * b) - (4 * a * c));

  return [Math.round((- b - d) / (2 * a)), Math.round((- b + d) / (2 * a))]
    .sort((left, right) => left - right);
}
