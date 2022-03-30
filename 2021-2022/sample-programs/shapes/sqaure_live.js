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

    // inner and outter loop
    // console.log() -> \n  

    // 3
    // ['*', '*', '*']
    // ['*', '*', '*']
    // ['*', '*', '*']
    for(let row = 0; row < size; row++) {
        let rowString = '';
        for(let col = 0; col < size; col++) {
            rowString += ' * '; 
        }
        console.log(rowString)
        rowString='';
    }
   

})(process.argv[2]); 


// proccess 
// information and methods related to the node js run time
// process.exit() // exit the program 
// proccess.argv = ['node', 'sqaure_live.js', *** ]