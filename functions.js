/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(n){
  return n.toString()
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n){
	return(n+1)
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n){
	return(n-1)
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
	return(x+y)
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y){
	return(x-y)
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
	return(x*y)
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
	return(x/y)
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
	return(x*x)
}


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation,x,y){
	if(operation==="add"){
		var result= (x+y)
		console.log(x + " + " + y + " = " + result)
		return result;
	}
	if(operation==="subtract"){
		var result= (x-y)
		console.log(x + " - " + y + " = " + result)
		return result;
	}
	if(operation==="multiply"){
		var result= (x*y)
		console.log(x + " * " + y + " = " + result)
		return result;
	}
	if(operation==="divide"){
		var result= (x/y)
		console.log(x + " / " + y + " = " + result) 
		return result;
	}


}


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
	function isGreaterThan(a,b){
		if(a>b){
			return true;
		}
		else{
			return false;
		}
		}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
	if(a<b){
		return true;
	}
	else{
		return false;
	}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b){
	if(a===b){
		return true;
	}
	else{
		return false;
	}
}



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y){
	if(x<y){
		return(x)
	}
	else{
		return(y)
	}
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x,y){
	if(x<y){
		return(y)
	}
	else{
		return(x)
	}
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){
	if(n % 2 === 0){
		return true
	} 
	else{
		return false
	}
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
	if(n%2!==0){
		return true
	}
	else{
		return false
	}
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score,totalMaximumPossibleScore){
	var x= (score/totalMaximumPossibleScore);
	var totalMaximumPossibleScore=(1);
		if(x>= 0.9 && x<= 1) {
			return "A"
		}
		
		if(x>= 0.8 && x<= 0.89){
			return "B"
		}
		
		if(x>= 0.7 && x<= 0.79){
			return "C"
		}
		
		if(x>= 0.6 && x<= 0.7){
			return "D"
		}
		
		if(x>= 0 && x<= 0.59){
			return "F"
		}
		
}




/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

