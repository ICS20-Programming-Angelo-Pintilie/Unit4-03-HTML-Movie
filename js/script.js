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
  	// initialize variables
	let rating = ""
	
	// get user input
	let age = parseInt(document.getElementById('age').value)

  	// if age is 18 or more, display "You are eligible to see.."
	if (age >= 18) {
		rating = "You are eligible to see an R rated film!"
	} 
	// otherwise, if age is 13 or more, display "You are eligible to see.."	
	else if (age >= 13) {
		rating = "You are eligible to see a PG-13 movie by yourself!"
	}
	// otherwise, if age is 10 or more, display "You are eligible to see.."
	else if (age >= 10) {
		rating = "You are eligible to see a PG rated movie by yourself! However, you need to be supervised to see a PG-13 film."
	}
    // otherwise, if age is 8 or more, display "You are eligible to see.."
	else if (age >= 8) {
		rating = "You are eligible to see a G rated movie by yourself! However, you need to be supervised to see a PG film."
	}
	// otherwise, they did not enter a valid age
	else {
		rating = "Please enter a valid age."
	}

  // display the rating
  document.getElementById('display-results').innerHTML = rating
}