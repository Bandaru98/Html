// let ary = [{
//     name: "john",
//     age: 30,
//     no: 34,
//     hobby: "games",
//     like: "sweets",
//     place: "banglore",
//     status: "A"
// },
// {
//     name: "julie",
//     age: 35,
//     no: 35,
//     hobby: "news",
//     like: "fruits",
//     place: "banglorekadapa",
//     status: "B"
// }
// ]
// console.log(ary[1].hobby);
//---------------------------
// const array1 = [5, 12, 8, 130, 44];
// let index = -2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// console.log(`An index of ${index} returns ${array1.at(index)}`);
//--------------------------------sequence of string ------------------

// let string1=(str1)=>{
//     return str1.split("").sort().join("");

// };
// console.log(string1( "Madhavi"));// caps letter has high priority in js-------
//------------------------------------
// function order(str){
//  var x=str.split('')
//  return x.sort().join('')
// }

// console.log(order('keerna'));
//-------------
// let str=(s)=>{
//     return s.split("").sort().join("");
// };
// console.log(str("keerna"));
//-----------------------------------
// function fun(n1,n2,n3){
//  return n1*n2+n3;
// }
// console.log(fun(10,20,30));
//--------arrow--------------------------------
// const fun =(n1,n2)=>n1+n2;
// console.log(fun(10,2));
//------------------------------------------
// const num1 = 100;
// const num2 = 200;
// const name = "keer";
// function fun(n1, n2) {
//     return n1 * n2;

// }
// console.log(fun(num1,num2));
//--------------this. keyword is access in function method ---
// const obj={
//     name:"keer",
//     n1:20,
//     n2:30,
//     n3:40,
//     myfun:function(){
//         console.log(`${this.n2}`);
//     }
// }
// obj.myfun()
//-------------//arrow function we didnt able to see value by using this keyword then we get undefined
// const obj={
//     a:10,b:100,c:20,d:200,e:30,f:300,
//     greet:(a,b,c,d,e,f)=>{
//         console.log(this.a);
//     }
// }
// obj.greet()//undefined bcz arrow didnt get access keyword this---------------
//---------------------------








