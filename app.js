// npm --version

// local dependency - use it only in this particular project
// npm -i <packagname>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename>   for mac , not sure if its working for ubuntu

//package.json
//manual approach(create package.json in the root, create proprerties etc.)
// npm init (step by step, press enter)
// ipm init -y (everything default)npm init


const _=require('lodash');

const items=[1,[2,[3,4]]];

const newItems=_.flattenDeep(items);
console.log(newItems);
console.log('Hello People');