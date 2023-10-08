// function yearDays(year) {
//   //   return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
//   //   return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
//   //     ? `${year} has 365 days`
//   //     : `${year} has 366 days`;

//   return !(year % 100) ? !(year % 100) : !(year % 100);

//   //   return (
//   //     year +
//   //     ' has ' +
//   //     ((!(year % 100) && year % 400) || year % 4 ? '365' : '366') +
//   //     ' days'
//   //   );
// }
// console.log(yearDays(500));

// const ownedCatAndDog = (catYears, dogYears) => [
//   catYears < 24 ? ~~(catYears / 15) : ~~((catYears - 16) / 4),
//   dogYears < 24 ? ~~(dogYears / 15) : ~~((dogYears - 14) / 5),
// ];

// console.log(ownedCatAndDog(15, 22));

// console.log(~~(-23 / 11));
// console.log(~~-1);

// function thetaFormula(radius, arc, angle) {
//   //Solve for the missing value!
//   const result =
//     !angle ||
//     (isNaN(radius) && isNaN(arc)) ||
//     (isNaN(angle) && isNaN(arc)) ||
//     (isNaN(radius) && isNaN(angle)) ||
//     (isNaN(radius) && isNaN(arc) && isNaN(angle))
//       ? null
//       : radius === '?'
//       ? arc / angle
//       : arc === '?'
//       ? radius * angle
//       : angle === '?'
//       ? arc / radius
//       : radius === arc / angle;
//   return typeof result !== 'number' ? result : Math.round(result * 1000) / 1000;
// }
// function thetaFormula(radius, arc, angle) {
//   let numLength = [radius, arc, angle].filter(
//     (x) => typeof x === 'number'
//   ).length;
//   //   console.log(numLength);
//   let numX = [radius, arc, angle].filter((x) => x === '?').length;
//   //   console.log(numX);
//   return numLength + numX === 3 && numLength > 1
//     ? numLength === 2
//       ? +(
//           radius === '?'
//             ? arc / angle
//             : arc === '?'
//             ? radius * angle
//             : arc / radius
//         ).toFixed(3)
//       : radius === arc / angle
//     : null;
// }

// console.log(thetaFormula(92, 6, '?'));
// console.log(thetaFormula('?', 12, 35));
// console.log(thetaFormula());
// console.log(thetaFormula('?', '?', '?'));
// console.log(thetaFormula(1, '?', '?'));
// console.log(thetaFormula('?', 2, '?'));
// console.log(thetaFormula('?', '?', 3));
// console.log('****************************************************');
// console.log(thetaFormula(3, 0, 14));
// console.log(thetaFormula(0, 3, 14));
// console.log(thetaFormula(''));
// console.log(thetaFormula('', '', ''));

// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

// console.log(isDivisible(3, 3, 4));
// console.log(isDivisible(12, 3, 4));
// console.log(isDivisible(8, 3, 4));
// console.log(isDivisible(48, 3, 4));
