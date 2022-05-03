// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a movie rating based on the age of the user
 */
function displayRating () {
  // initialize constants
  const RRATED = 18
    // initialize constants
  const PG13 = 13
   // initialize constants
  const PG = 11
  // initialize constants
  const G = 1
  	// initialize variables
	let rating = ""
	
	// get user input
	let age = parseInt(document.getElementById('age').value)

  	// if age is 18 or more, display "You are eligible to see.."
	if (age >= RRATED) {
		rating = "You are eligible to see an R rated film by yourself!"
	} 
	// otherwise, if age is 13 or more, display "You are eligible to see.."	
	else if (age >= PG13) {
		rating = "You are eligible to see a PG-13 movie by yourself!"
	}
	// otherwise, if age is 10 or more, display "You are eligible to see.."
	else if (age >= PG) {
		rating = "You are eligible to see a PG rated movie by yourself! However, you need to be supervised to see a PG-13 film."
	}
    // otherwise, if age is 8 or more, display "You are eligible to see.."
	else if (age >= G) {
		rating = "You are eligible to see a G rated movie with the company of a parent or gaurdian!"
	}
	// otherwise, they did not enter a valid age
	else {
		rating = "Please enter a valid age."
	}

  // display the rating
  document.getElementById('display-results').innerHTML = rating
}