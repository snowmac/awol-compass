(function(nthElement){
    if(!nthElement) {
        console.error("You must supply a number for the size of sqaure you want printed"); 
        process.exit(1)
    }

    const size = parseInt(nthElement)
    
    if(isNaN(size)) {
        console.error("You must supply a number (not a string) for the size of sqaure you want printed"); 
        process.exit(1)
    }

    let starsToPrint = 1;
    let print = ''; 
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++) {
            if(col === size-1 && row !== size-1){
                print +=  '*\n';
            } else {
                print += '*'
            }
        }
    }

    console.log(print)
})(process.argv[2])