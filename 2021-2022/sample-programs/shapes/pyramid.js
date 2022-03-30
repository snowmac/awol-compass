(function(elementCount){
    if(!elementCount) {
        console.error('Please supply a valid number for the count');
        process.exit(1); 
    }

    let size = parseInt(elementCount);

    if(isNaN(size)) {
        console.error('Please supply a valid number for the count; the provided input of ' + elementCount + ' is not a valid integer');
        process.exit(1);
    }

    if(size <= 3) {
        console.error('Please supply numbers greater 4');
        process.exit(1);
    }    

    if(size % 2 === 0) {
        console.error('Please supply odd numbers only');
        process.exit(1);
    }

    const spacer = ' '; 
    const star = process.argv[3] || '*';

    const defaultSpacesToPrintToLeft = Math.round(size / 2) - 1; 
    let spacesToPrintToLeft = defaultSpacesToPrintToLeft;
    let defaultStarsToPrint = 1;
    let starsToPrint = 1; 

    // input is odd, check for odd input; %
    // 5
    // [' ', ' ', '*', ' ', ' ']
    // [' ', '*', '*', '*', ' ']
    // ['*', '*', '*', '*', '*']
    for(let row = 0; row < (defaultSpacesToPrintToLeft+1); row++) {
        let rowString = '';
        for(let col = 0; col < size; col++) {
            if(spacesToPrintToLeft > 0) {
                rowString += spacer;
                spacesToPrintToLeft--;
            } else if(starsToPrint > 0) {
                rowString += star; 
                starsToPrint--; 
            } else {
                rowString += spacer;
            }    
        }
        
        defaultStarsToPrint += 2; 
        starsToPrint = defaultStarsToPrint; 
        spacesToPrintToLeft = defaultSpacesToPrintToLeft-(row+1); 

        console.log(rowString)
        rowString='';
    }
   

})(process.argv[2]); 

