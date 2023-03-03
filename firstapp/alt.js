module.exports.items=['1','2'];

const person={
    names:'bob',
}
module.exports.singleperson=person;

function sum(a,b){
    console.log(`sum is : ${a+b}`);
}
module.exports =sum;