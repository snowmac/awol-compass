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

    const spacer = '   '; 
    const star = process.argv[3] || ' * ';

    const defaultSpacesToPrintToLeft = Math.round(size / 2) - 1; 
    let spacesToPrintToLeft = defaultSpacesToPrintToLeft;
    let defaultStarsToPrint = 1;
    let starsToPrint = 1; 
    let rows = []

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

        rows.push(rowString); 
        rowString='';
    }
   
    for(let x = 0; x < rows.length; x++) {
        console.log(rows[x]);
    }
    
    for(let y = rows.length-2; y > -1; y--) {
        console.log(rows[y])
    }

})(process.argv[2]); 

// (function(nthElement){
//     if(!nthElement) {
//         console.error("You must supply a number for the size of diamond you want printed"); 
//         process.exit(1)
//     }

//     const size = parseInt(nthElement)
    
//     if(isNaN(size)) {
//         console.error("You must supply a number (not a string) for the size of diamond you want printed"); 
//         process.exit(1)
//     }

//     let starsToPrint = 1;
//     let spacesToPrint = size - starsToPrint; 

//     let print = ''; 
//     // let middlePos = Math.round(size / 2); 

//     for(let row = 0; row < size; row++){
//         for(let col = 0; col < size; col++) {
//             if(spacesToPrint === 0) {
//                 print += '*';
//             } else if(col == size-1) {
//                 print += ' \n'; 
//             } else {
//                 print += ' '; 
//             }
//         }
//         spacesToPrint -= 2;
//         starsToPrint += 2; 
//     }

//     console.log(print)
// })(process.argv[2])

// // 5 point star: 
// // [' ', ' ', '*', ' ', ' ']; spacesToPrint = 4; starsToPrint = 1;
// // [' ', '*', '*', '*', ' ']; spacesToPrint = 2; starsToPrint = 3;
// // ['*', '*', '*', '*', '*']; spacesToPrint = 0; starsToPrint = 5;
// // [' ', '*', '*', '*', ' ']; spacesToPrint = 2; starsToPrint = 3;
// // [' ', ' ', '*', ' ', ' ']; spacesToPrint = 4; starsToPrint = 1;

// // if(starsToPrint === size && spacesToPrint === 0) {
// //    starsToPrint = starsToPrint - 2; 
// //    spacesToPrint += 2; 
// //    
// // } else {
// //   
// // }

// //   *  
// //  *** 
// // *****
// //  ***
// //   *
 
