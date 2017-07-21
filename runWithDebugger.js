function sayHi() {
  console.log('hi!');
}


function sayHiTo(name) {
  console.log('hi ' + name);
}


function sayFullName(first, last) {
  console.log(first + ' '  + last);
}







function runWithDebugger(callback, optionalArgumentsForCallBackAsArray){
	var callbackIsFunction = (typeof callback === "function") ? true : false ;
	var optionalArgumentsForCallBackAsArray = (Array.isArray(optionalArgumentsForCallBackAsArray))? true: false ;


	
	// callback is a function
	if(callbackIsFunction){
		// if There is optional argument AND it is an Array, run callback function with optional Array passed in
		if(arguments.length > 1 && optionalArgumentsForCallBackAsArray ){
			debugger;
            callback.apply(this, optionalArgumentsForCallBackAsArray);	
 		
 		// if There NO optional argument AND it is NOT an Array, throw error
        } else if (arguments.length > 1 && !optionalArgumentsForCallBackAsArray ){	
        	throw new Error('please pass the valid Array as second argument');
        // There's NO optional argument, run callback
		} else {
			debugger;
			sayHi();
		}

		
	// callback is NOT a function, throw error
	} else {
		throw new Error('please pass a valid callback function into runWithDebugger');
	}
}



runWithDebugger(sayHiTo, ['james']);




