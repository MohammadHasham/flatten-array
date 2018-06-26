Flatten Arrays
=========

A small library that flatten deeply nested arrays   

## Installation

  `npm install flatten-arrayjs`

## Usage

    let arr = [1,[2,3,[4,5,[6]]]];
    
    var numFormatter = require('flatten-arrayjs');

    var formattedNum = numFormatter(arr);
  
  
  Output should be `[1,2,3,4,5,6]`


## Tests

  `npm test`

## Contributing

Please contribute by adding more functions related to deeply nested arrays.
