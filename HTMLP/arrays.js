// const myarray = ["sweet", "jangri", "laddu", "mitai"];
// console.log(myarray[3]);
// myarray.push("keerr","kavva");
// console.log(myarray);//push-add amultiple items
// myarray.pop();
// console.log(myarray);//pop-removing last index

// let x= myarray.concat("mysurpak","sugar");
// console.log(x);//concat-adding
// myarray.reverse();
// console.log(myarray);//reverse

// let n=[2,90,4,3,87,4,1];
// console.log(n.sort());//sort-alphabetswise & numerical
// let n1 = [1, 2, 3];
// n1.shift();
// console.log(n1); //shift-remove the first elemment of array

// let n2 = [1, 2, 3];
// n2.unshift(0);
// console.log(n2);//add one or more elements to the beginning of an array.


// // // define an array of fruits
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// // remove two elements starting from index 2
// const removed = fruits.splice(2, 2);

// // // insert two elements at index 2
// fruits.splice(2, 0, 'kiwi', 'lemon');

// console.log(fruits); // output: ["apple", "banana", "kiwi", "lemon", "date", "elderberry"]
// console.log(removed); // output: ["cherry", "date"]
//add or remove elements from an array. It modifies the original array and returns an array of the removed elements.

// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.slice(2, 4);// To create a new array that contains a copy of a portion of the original 


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);//To create a new array by combining two or more arrays

// const originalArray = [1, 2, 3];
// const newArray = originalArray.map((x) => x * 2);// To create a new array by applying a function to each element of the original array





//-------function----------------------------
// for (let i=0;i<4;i++){
//     console.log(myarray[i]);

// }
// let len=myarray.length
// console.log(len);


// let myarray1=[11,32,14,15,18,39];
// // function fun(age){
// //    if(age>19);
// //    console.log("u can vote");
// // }
// // let result=myarray1.find(fun);
// // console.log(result);

// function fun(a,b){
//    return(a-b);
// }
// console.log(myarray1.sort(fun));

//-------------filter------------------------

// const voter1=[2,13,20,19,11,10,27,12,47,18,2];

// let res = voter.filter(function(x){
//    return x>17;
// })
// console.log(res);//------------------------one method for function
// const voter=[2,13,20,19,11,10,27,12,47,18,2];
// // console.log(voter.filter(function(age){
// //    return age>20

// //  }));//-----------------------------another method for function


//--------------------------last indexof()--------------
// const sub=[0.222,0.87,0.73,1.03,1.72,1.2,0.222,1.8,0.927]
// let res1=sub.lastIndexOf(0.222);
// console.log(res1);//6


//---------sort method---------------------

// let num=[10,60,58,70,34,20];
// num.sort();
// console.log(num);//------------only for single digits-sort

// let num=[10,600,58,70,34,20,100];
// let res=num.sort(function(a,b){
//    return a-b;
// })
// console.log(res);//---------two digits sort function parameter return a-b log-------


// let num = ["a","b","n","g","d","s","l","z"];
// num.sort();
// console.log(num);

// let num = ["az","bwed","naju","gukyyum","dnbnb","sty","lfht","zopk"];
// num.sort();
// console.log(num);


//------------pop-------------out of array last element

// let n=[1,2,4,3,5,6,7,9,6,7];
// n.pop();
// console.log(n);//-----numbers

// let n1=["adb","hju","sjdgc"]
// n1.pop();
// console.log(n1);//------strings

//--------------push--------add elements

// /* let num=[20,78,10,11,39,11,10,8,4,7];
// num.push(100,93,98,"keer");
// console.log(num); */
//----------------numbers

// /* let num=["kir","keer","keerthana"];
// num.push("madhu","madhavi");
// console.log(num); *///-------------strings----------shift alt a-----for single comment---

//----------------shift-------remove first element--------------
// let num=[20,1,6,7,26,21,0,1];
// num.shift();
// console.log(num);//-numbers

// let num1=["k","kir","keer","madhu"];
// num1.shift();
// console.log(num1);//----strings

//------------unshift----------------add first element---
// let num=[20,1,6,7,26,21,0,1];
// num.unshift(10);
// console.log(num);//-numbers

// let num1=["k","kir","keer","madhu"];
// num1.unshift("bandaru");
// console.log(num1);//----strings


//---------------------concat------add two strings-------
// let num=[20,1,6,7,26,21,0,1];
// ;let num1 = num.concat(34,80);
// console.log(num1);//-numbers

// let num=["k","kir","keer","madhu"];
// let num1 = num.concat("bandaru","keeeeeeer");
// console.log(num1);//strings

//---------join------------array converts in a string-----------

// let num=[1,9,0,3,7,11,28,23];
// let num1=num.join("+");
// console.log(num1);//numbers

// let num=["k","kir","keer","madhu"];
// let num1=num.join(" ");
// console.log(num1);
// console.log(typeof num1);//strings

//---------------------------------slice---
// let num=[0,1,2,3,4,5,6,7,8,9,10];
// let res=num.slice(1,5);
// console.log(res);// cutting with help of index value 

//-------------------------------------splice----------
// let num=[0,1,2,3,4,5,6,7,8,9,10];
// num.splice(5);
// console.log(num );//cutting value is add(start,deletecount,items-----)

// ---------------------------------------isarray()--------------
// let num=[0,1,2,3,4,5,6,7,8,9,10];
// let num1=Array.isArray(num);
// console.log(num1);//is array or not------only this method use Array keywords-------

//------------------------------indexOf() , lastIndexof()-----------------
// let num=[10,2,4,9,45,50,59];
// let num1=num.indexOf(9);
// console.log(num1);//string value shows index number------indexOf(9)output is 3---------------

// let num=[10,2,4,9,45,50,59];
// let num1=num.lastIndexOf(59);
// console.log(num1);//string value shows lastindex number------indexOf(9)output is 6---------------

//-----------------------find(),filter,findIndex()-------------
// let num=[10,2,4,9,45,50,59];
// let num1=num.find(function (n2){
//   return  n2>50;
// });
// console.log(num1);//we get first element only------------by using find-------59-----

// let num=[10,2,4,9,45,50,59];
// let num1=num.filter(function (n2){
//   return  n2>10;
// });
// console.log(num1);//we get all elements -------------by using filter--------
  

// let num=[10,2,4,9,45,50,59];
// let num1=num.findIndex(function (n2){
//   return  n2>50;
// });
// console.log(num1);//we get index value---------by using string value-------6------------

//------------------------map------------
// let num=[2,40,3,7,1,10];
// let num1=num.map(function(n){
//    return n*10;//n*n;
// });
// console.log(num1);

//--------------------foreach------------
// let num=[1,3,8,2,0,10];
// let num1=num.forEach(function(value,index){
//    console.log(value,index);
// });//element and index value shows------output is 1 0,3 1   ---like this

// let num=["banana","apple","guava","grapes"];
// let num1=num.forEach(function(val,inx){
//    console.log(inx,val);//0 banana,1 apple-----------
// });

//-------------------some--------boolean values-true r false-----------
// let num=[10,2,4,9,45,50,59];
// let num1=num.some(function (n2){
//   return  n2>50;
// });
// console.log(num1);

//---------------------every------------boolean values-true r false-----------
// let num=[10,2,4,9,45,50,59];
// let num1=num.every(function (n2){
//   return  n2<2;
// });
// console.log(num1);//true r false

//----------------reverse----------
// let num=[10,2,4,9,45,50,59];
// let num1=num.reverse(function (n2){
//   return  n2>50;
// });
// console.log(num1);//reverse

// let num=[10,2,4,9,45,50,59];
// let num1=num.reverse();
// console.log(num1);


//-------------------tostring------convert all values into string
// let num=[1,4,2,7,96,10,20];
// let num1=num.toString();
// console.log(num1);

//---------------------includesof-------
// let num=[1,4,2,7,96,10,20];
// let num1=num.includes();
// console.log(num1);


//-------------------fill----------------undefined we give number as1 it shows 1 every element-
// let num=[1,4,2,7,96,10,20];
// let num1=num.fill(1);
// console.log(num1);


//-----------------map and filter method using-----------------

//  const numbers = [10,2,3,5,67,7,8];
//  let numbers1=numbers.map(function(n){
//     return n*2

//  } ).filter((x)=>{
//     return x<10;
//  })
//  console.log(numbers1);
//-----------------
// const numbers = [10,2,3,5,67,7,8];
// let n=numbers.map((x)=>{
//     return x*10;
// });n.push(100)
// console.log(n);
//















