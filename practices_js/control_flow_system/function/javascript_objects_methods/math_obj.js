// javascript math objects and methods
// JavaScript provides a built-in Math object that contains properties and methods for mathematical constants and functions
// The Math object is not a constructor, so you cannot create instances of it. Instead,
// you can access its properties and methods directly using the Math object itself.     
// Math Properties
// Math.PI: Represents the value of π (pi), approximately 3.14159
console.log(Math.PI); // Output: 3.141592653589793
// Math.E: Represents Euler's number, approximately 2.71828 
console.log(Math.E); // Output: 2.718281828459045
// Math.SQRT2: Represents the square root of 2, approximately 1.41421
console.log(Math.SQRT2); // Output: 1.4142135623730951
// Math.SQRT1_2: Represents the square root of 1
console.log(Math.SQRT1_2); // Output: 0.7071067811865476
// Math.LN2: Represents the natural logarithm of 2, approximately 0.69315
console.log(Math.LN2); // Output: 0.6931471805599453
// Math.LN10: Represents the natural logarithm of 10, approximately 2.30258
console.log(Math.LN10); // Output: 2.302585092994046
// Math.LOG2E: Represents the base-2 logarithm of E, approximately 1.44269
console.log(Math.LOG2E); // Output: 1.4426950408889634
// Math.LOG10E: Represents the base-10 logarithm of E, approximately 0.43429
console.log(Math.LOG10E); // Output: 0.4342944819032518
// Math Methods
// Math.abs(x): Returns the absolute value of x
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5)); // Output: 5
// Math.ceil(x): Returns the smallest integer greater than or equal to x
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.ceil(-4.2)); // Output: -4
// Math.floor(x): Returns the largest integer less than or equal to x
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.floor(-4.8)); // Output: -5
// Math.round(x): Returns the value of x rounded to the nearest integer
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
// console.log(Math.round(-4.5)); // Output: -4
console.log(Math.round(-4.6)); // Output: -5
// Math.max(...values): Returns the largest of the given values
console.log(Math.max(1, 2, 3)); // Output: 3
console.log(Math.max(-1, -2, -3)); // Output: -1
// Math.min(...values): Returns the smallest of the given values
console.log(Math.min(1, 2, 3)); // Output: 1
console.log(Math.min(-1, -2, -3)); // Output: -3
// Math.pow(base, exponent): Returns the value of base raised to the power of exponent
console.log(Math.pow(2, 3)); // Output: 8 (2^3)
console.log(Math.pow(5, 2)); // Output: 25 (5^2)
// Math.sqrt(x): Returns the square root of x
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5
// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: A random number between 0 and 1
// Math.random() can be used to generate random integers within a specific range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10
// Math.trunc(x): Returns the integer part of x (removes the fractional part)
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4
// Math.sign(x): Returns the sign of x, indicating whether x is positive, negative, or zero
console.log(Math.sign(5)); // Output: 1 (positive)
console.log(Math.sign(-5)); // Output: -1 (negative)
console.log(Math.sign(0)); // Output: 0 (zero)
// Math.log(x): Returns the natural logarithm (base e) of x
console.log(Math.log(Math.E)); // Output: 1 (natural logarithm of e)
console.log(Math.log(10)); // Output: 2.302585092994046 (natural logarithm of 10)
// Math.log10(x): Returns the base-10 logarithm of x
console.log(Math.log10(100)); // Output: 2 (base-10 logarithm of 100)
console.log(Math.log10(1000)); // Output: 3 (base-10 logarithm of 1000)
// Math.log2(x): Returns the base-2 logarithm of x
console.log(Math.log2(8)); // Output: 3 (base-2 logarithm of 8)
console.log(Math.log2(16)); // Output: 4 (base-2 logarithm of 16)
// Math.hypot(...values): Returns the square root of the sum of squares of the given values
console.log(Math.hypot(3, 4)); // Output: 5 (3^2 + 4^2 = 25, sqrt(25) = 5)
console.log(Math.hypot(5, 12)); // Output: 13 (5^2 + 12^2 = 169, sqrt(169) = 13)
// Math.sin(x): Returns the sine of x (x is in radians)
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of       
// 90 degrees or π/2 radians)
console.log(Math.sin(Math.PI)); // Output: 0 (sine of 180 degrees or π radians)
console.log(Math.sin(0)); // Output: 0 (sine of 0 degrees or 0 radians)
// Math.cos(x): Returns the cosine of x (x is in radians)
console.log(Math.cos(0)); // Output: 1 (cosine of 0 degrees or 0 radians)
console.log(Math.cos(Math.PI / 2)); // Output: 0 (cosine of 90 degrees or π/2 radians)
console.log(Math.cos(Math.PI)); // Output: -1 (cosine of 180 degrees or π radians)
// Math.tan(x): Returns the tangent of x (x is in radians)
console.log(Math.tan(0)); // Output: 0 (tangent of 0 degrees or 0 radians)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of 45 degrees or π/4 radians)
console.log(Math.tan(Math.PI / 2)); // Output: Infinity (tangent of 90 degrees or π/            2 radians, undefined in the unit circle)
// Math.asin(x): Returns the arcsine (inverse sine) of x, in radians
console.log(Math.asin(1)); // Output: 1.570796326794896 (arcsine of 1, which is π/2 radians or 90 degrees)
console     .log(Math.asin(0)); // Output: 0 (arcsine of 0, which is 0 radians or 0 degrees)
console.log(Math.asin(-1)); // Output: -1.570796326794896 // (arcsine of -1, which is -π/2 radians or -90 degrees)
// Math.acos(x): Returns the arccosine (inverse cosine) of x, in radians
console.log(Math.acos(1)); // Output: 0 (arccosine of 1, which is 0 radians or 0 degrees)
console.log(Math.acos(0)); // Output: 1.5707963267948966 (arccosine of 0, which is π/2 radians or 90 degrees)
console.log(Math.acos(-1)); // Output: 3.141592653589793 // (arccosine of -1, which is π radians or 180 degrees)
// Math.atan(x): Returns the arctangent (inverse tangent) of x, in radians
console.log(Math.atan(1)); // Output: 0.7853981633974483 // (arctangent of 1, which is π/4 radians or 45 degrees)
console.log(Math.atan(0)); // Output: 0 (arctangent of 0, which is 0 radians or 0 degrees)
console.log(Math.atan(-1)); // Output: -0.7853981633974483 // (arctangent of -1, which is -π/4 radians or -45 degrees)
// Math.atan2(y, x): Returns the arctangent of the quotient of its arguments, in radians
console.log(Math.atan2(1, 1)); // Output: 0.7853981633974483 // (arctangent of 1/1, which is π/4 radians or 45 degrees)
console.log(Math.atan2(1, 0)); // Output: 1.5707963267948966 // (arctangent of 1/0, which is π/2 radians or 90 degrees)
console.log(Math.atan2(-1, -1)); // Output: -2.356194490192345 // (arctangent of -1/-1, which is -3π/4 radians or -135 degrees)
// Math.cbrt(x): Returns the cube root of x
console.log(Math.cbrt(27)); // Output: 3 (cube root of 27)
console.log(Math.cbrt(-8)); // Output: -2 (cube root of -8)
// Math.clz32(x): Returns the number of leading zero bits in the 32-bit binary representation of x
console.log(Math.clz32(0)); // Output: 32 (all bits are zero)
console.log(Math.clz32(1)); // Output: 31 // (1 in binary is 00000000000000000000000000000001)
console.log(Math.clz32(16)); // Output: 28 // (16 in binary is 00000000000000000000000000010000)
// Math.imul(a, b): Returns the result of multiplying two 32-bit integers
console.log(Math.imul(2, 3)); // Output: 6 (2 * 3)
console.log(Math.imul(0xFFFFFFFF, 5)); // Output: 4294967295 // (0xFFFFFFFF is the maximum 32-bit unsigned integer, and multiplying it by 5 results in overflow, returning the maximum value)
console.log(Math.imul(0x7FFFFFFF, 2)); // Output: 2147483646 // (0x7FFFFFFF is the maximum 32-bit signed integer, and multiplying it by 2 results in overflow, returning the maximum value)
console.log(Math.imul(0x80000000, 2)); // Output: 0 // (0x80000000 is the minimum 32-bit signed integer, and multiplying it by 2 results in overflow, returning 0)
// Math.fround(x): Returns the nearest single precision float representation of x
console.log(Math.fround(1.5)); // Output: 1.5 (single precision representation of 1.5)
console.log(Math.fround(1.337)); // Output: 1.3370000123977661 // (single precision representation of 1.337)
console.log(Math.fround(1e-40)); // Output: 0 // (single precision representation of a very small number, which is rounded to 0)
// Math.scale(x, inFactor, outFactor): Scales a number from one range to another
console.log(Math.scale(5, 0, 10, 0, 100)); // Output: 50 (scales 5 from range [0, 10] to range [0, 100])
console.log(Math.scale(2, 0, 5, 0, 100)); // Output: 40 (scales 2 from range [0, 5] to range [0, 100])
console.log(Math.scale(3, 0, 10, 0, 50)); // Output: 15 (scales 3 from range [0, 10] to range [0, 50])
// Math.cosh(x): Returns the hyperbolic cosine of x
console.log(Math.cosh(0)); // Output: 1 // (hyperbolic cosine of 0)
console.log(Math.cosh(1)); // Output: 1.5430806348152437 // (hyperbolic cosine of 1)
console.log(Math.cosh(-1)); // Output: 1.5430806348152437 // (hyperbolic cosine is even, so cosh(-1) = cosh(1))
// Math.sinh(x): Returns the hyperbolic sine of x
console.log(Math.sinh(0)); // Output: 0 // (hyperbolic sine of 0)
console.log(Math.sinh(1)); // Output: 1.1752011936438014 // (hyperbolic sine of 1)
console.log(Math.sinh(-1)); // Output: -1.1752011936438014 // (hyperbolic sine is odd, so sinh(-1) = -sinh(1))
// Math.tanh(x): Returns the hyperbolic tangent of x
console.log(Math.tanh(0)); // Output: 0 // (hyperbolic tangent of 0)
console.log(Math.tanh(1)); // Output: 0.7615941559557649 // (hyperbolic tangent of 1)
console.log(Math.tanh(-1)); // Output: -0.7615941559557649 // (hyperbolic tangent is odd, so tanh(-1) = -tanh(1))
// Math.acosh(x): Returns the inverse hyperbolic cosine of x
console.log(Math.acosh(1)); // Output: 0 // (inverse hyperbolic cosine of 1)
console.log(Math.acosh(2)); // Output: 1.3169578969248166 // (inverse hyperbolic cosine of 2)
console.log(Math.acosh(3)); // Output: 1.762747174039086 // (inverse hyperbolic cosine of 3)
// Math.asinh(x): Returns the inverse hyperbolic sine of x
console.log(Math.asinh(0)); // Output: 0 // (inverse hyperbolic sine of 0)
console.log(Math.asinh(1)); // Output: 0.881373587019543 // (inverse hyperbolic sine of 1)
console.log(Math.asinh(-1)); // Output: -0.881373587019543 // (inverse hyperbolic sine is odd, so asinh(-1) = -asinh(1))
// Math.atanh(x): Returns the inverse hyperbolic tangent of x    
console.log(Math.atanh(0)); // Output: 0 // (inverse hyperbolic tangent of 0)
console.log(Math.atanh(0.5)); // Output: 0.5493061443340549 // (inverse hyperbolic tangent of 0.5)
console.log(Math.atanh(-0.5)); // Output: -0.5493061443340549 // (inverse hyperbolic tangent is odd, so atanh(-0.5) = -atanh(0.5))  