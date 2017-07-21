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
	var callbackIsFunction = (typeof callback === "function");
	// callback is a function
	if(callbackIsFunction){
		debugger;
		sayHi();
	// callback is NOT a function, throw error
	} else {
		throw new Error('please pass a valid callback function');
	}
}





 

	// there is at least one argument pass in
	if(arguments.length >= 1 ){
		 // check if callback is a function first  
		 if(typeof callback === "function") {
			if(arguments.length === 1){
				debugger;
				callback();
			// there are multi optional arguments pass in
			} else {
				//check if optionalArgumentsForCallBackAsArray is array
				if(Array.isArray(optionalArgumentsForCallBackAsArray)){
					debugger;
					callback.apply(this, optionalArgumentsForCallBackAsArray);		
				} else {
				// print out error message because  optionalArgumentsForCallBackAsArray is not a array
				console.error('please pass the array as second argument into "runWithDebugger" function ');
			}		
		 // print out error message because callback is not a function			
		 } else {
		 	console.error('please pass a function as first argument into "runWithDebugger" function');
		 }
	// there NO argument pass in
	} else {
		console.error('forgot to pass callback function ?');
	}

};