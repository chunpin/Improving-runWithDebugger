In Practical JavaScript's "Functions inside of functions" interlude, we wrote a runWithDebugger function. However, this function has a very glaring deficiency. We can't pass arguments into the callback function.

More specifically, code like this works fine.

function sayHi() {
  console.log('hi!');
}

runWithDebugger(sayHi); // 'hi!'
But it doesn't work with callback functions that take arguments like sayHiTo below.

function sayHiTo(name) {
  console.log('hi ' + name);
}
Your task is to rewrite runWithDebugger so it can take an optional array that contains any arguments you want to pass into the callback function.

More specifically, your new and improved runWithDebugger should be able to do this.

runWithDebugger(sayHiTo, ['gordon']); // 'hi gordon'
And of course, you should be able to pass multiple arguments into the array. Here's an example.

function sayFullName(first, last) {
  console.log(first + ' '  + last);
}

runWithDebugger(sayFullName, ['gordon', 'zhu']); // 'gordon zhu'
When you're done:

Put your solution in a Gist (gist.github.com).
Create a comment below and include a link to your Gist.
Good luck!