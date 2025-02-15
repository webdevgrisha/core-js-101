/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const fizz = 'Fizz';
  const buzz = 'Buzz';

  const divisionByThree = num / 3;
  const isMultiplesThree = divisionByThree === Math.floor(divisionByThree);

  const divisionByFive = num / 5;
  const isMultiplesFive = divisionByFive === Math.floor(divisionByFive);

  if (isMultiplesThree && isMultiplesFive) {
    return fizz + buzz;
  }
  if (isMultiplesThree) {
    return fizz;
  }
  if (isMultiplesFive) {
    return buzz;
  }

  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let currentNumber = 1;

  for (let i = 1; i <= n; i += 1) {
    currentNumber *= i;
  }

  return currentNumber;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;

  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }

  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const isSideALess = b + c > a;
  const isSideBLess = a + c > b;
  const isSideCLess = a + b > c;

  if (isSideALess && isSideBLess && isSideCLess) return true;

  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(/* rect1, rect2 */) {
  // const rect1X = rect1.left;
  // const rect1Y = rect1.top;

  // const rect2X = rect2.left;
  // const rect2Y = rect2.left;

  // return 1;
  throw new Error('Not implemented');
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const circleCenterX = circle.center.x;
  const circleCenterY = circle.center.y;
  const { radius } = circle;

  const pointX = point.x;
  const pointY = point.y;

  const distanceFromCirleCenterToPointX = pointX - circleCenterX;
  const distanceFromCirleCenterToPointY = pointY - circleCenterY;
  const distanceFromCirleCenterToPoint = Math.sqrt(
    distanceFromCirleCenterToPointX ** 2 + distanceFromCirleCenterToPointY ** 2,
  );

  return radius > distanceFromCirleCenterToPoint;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const symbolsCounts = {};

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] in symbolsCounts) {
      symbolsCounts[str[i]] += 1;
    } else {
      symbolsCounts[str[i]] = 1;
    }
  }

  const result = Object.keys(symbolsCounts).find(
    (symbol) => symbolsCounts[symbol] === 1,
  );

  return result;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const numbers = a > b ? [b, a] : [a, b];
  const interval = `${isStartIncluded ? '[' : '('}${numbers.join(', ')}${
    isEndIncluded ? ']' : ')'
  }`;

  return interval;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let reverseStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }

  return reverseStr;

  // return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let iterationNum = String(num).length - 1;
  let currentNum = num;
  let sum = 0;

  while (currentNum !== 0) {
    const remainder = currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
    sum += remainder * 10 ** iterationNum;
    iterationNum -= 1;
  }

  return sum;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const controlNum = +String(ccn).at(-1);
  const cardNumber = String(ccn)
    .slice(0, -1)
    .split('')
    .reverse()
    .map((item, index) => {
      const num = index % 2 === 0 ? +item * 2 : +item;
      return num >= 10 ? num - 9 : num;
    });

  const cardNumbersSum = cardNumber.reduce((sum, num) => sum + num, 0);

  return (cardNumbersSum + controlNum) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const numStr = String(num);
  let numSum = 0;
  let numSumStr = '';
  let digitalRoot = 0;

  for (let i = 0; i < numStr.length; i += 1) {
    numSum += +numStr[i];
  }

  numSumStr = String(numSum);

  for (let i = 0; i < numSumStr.length; i += 1) {
    digitalRoot += +numSumStr[i];
  }

  return digitalRoot;

  // ########################

  // const numSum = String(num).split('').reduce((sum, current) => sum + +current, 0);
  // const digitalRoot = String(numSum).split('').reduce((sum, current) => sum + +current, 0);

  // return digitalRoot;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const brackets = {
    open: ['[', '(', '{', '<'],
    close: {
      ']': '[',
      ')': '(',
      '}': '{',
      '>': '<',
    },
  };

  const bracketsStack = [];

  for (let i = 0; i < str.length; i += 1) {
    const bracket = str[i];
    const isOpen = brackets.open.includes(bracket);

    if (isOpen) {
      bracketsStack.push(bracket);
    } else {
      const openBrackets = brackets.close[bracket];
      const topBrackets = bracketsStack.at(-1);

      if (topBrackets !== openBrackets) return false;

      bracketsStack.pop();
    }
  }

  return bracketsStack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  // first way
  // return num.toString(n);

  // second way
  let iterationNum = 0;
  let currentNum = num;
  let sum = 0;
  while (currentNum !== 0) {
    const reminder = currentNum % n;
    currentNum = Math.floor(currentNum / n);
    sum += reminder * 10 ** iterationNum;
    iterationNum += 1;
  }

  return String(sum);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';

  const firstLink = pathes[0];
  const pathArr = firstLink.split('/');
  let commonDirectoryPath = '';
  let checkResult = null;

  let startPos = 0;

  for (let i = 0; i < pathArr.length; i += 1) {
    const checkPathFargment = pathArr[i] + (i === pathArr.length - 1 ? '' : '/');

    // eslint-disable-next-line no-loop-func, max-len
    checkResult = pathes.every((path) => path.slice(startPos, startPos + checkPathFargment.length) === checkPathFargment);

    if (!checkResult) break;

    startPos += checkPathFargment.length;
    commonDirectoryPath += checkPathFargment;
  }

  return commonDirectoryPath;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resultMatrixCols = m1.length;
  const resultMatrixRols = m2[0].length;
  const resultMatrix = new Array(resultMatrixCols)
    .fill()
    .map(() => new Array(resultMatrixRols));

  for (let i = 0; i < resultMatrixCols; i += 1) {
    const m1Row = m1[i];

    for (let b = 0; b < resultMatrixRols; b += 1) {
      const m2Col = m2.map((row) => row[b]);
      const rowColResult = m1Row.reduce(
        (sum, num, index) => sum + num * m2Col[index],
        0,
      );

      resultMatrix[i][b] = rowColResult;
    }
  }

  return resultMatrix;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const winPostions = ['036', '147', '258', '012', '345', '678', '048', '246'];

  for (let i = 0; i < winPostions.length; i += 1) {
    const winPos = winPostions[i].split('');
    const signs = winPos.map((index) => {
      const row = Math.floor(+index / 3);
      const col = +index % 3;

      return position[row][col];
    });

    if (signs.every((sign) => sign === 'X')) return 'X';
    if (signs.every((sign) => sign === '0')) return '0';
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
