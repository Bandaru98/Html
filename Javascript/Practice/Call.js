// call() , apply() and blind() //
let obj1 = {
    fname: "Suraj",
    lname: "Kumar",
    age: 32,
    fullname: function () {
        console.log(this.fname + " " + this.lname);
    }
}
let obj2 = {
    fname: "Prakash",
    lname: "Kumar",
    age: 29
}
// function borrowing
//obj1.fullname.call(obj2);
function fulldeails() {
    //console.log("Name"+":"+this.fname+" "+this.lname+" "+"Age"+":"+this.age);
    console.log(`Name : ${this.fname} ${this.lname} Age : ${this.age}`);
}

//fulldetails.call(obj1);
function userdetails(city, state) {
    console.log(`Hello My self ${this.fname} ${this.lname} and I live in ${city} (${state})`);
}
userdetails.call(obj1, "Renukoot", "Uttar_Pradesh"); // call()
userdetails.apply(obj2, ["Bangalore", "Karnatka"]); //apply()
// blind 
let userfun = userdetails.bind(obj1, "Praygraj", "Uttar_Pradesh");
userfun();
