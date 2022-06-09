//let name = "Abdullajon";
//console.log("Sarvar");

// const lname = "Mansur";
// console.log(lname);

// data types
// string, number, boolean, null, undefined, object, array

//string

//const streetName = "President st ";
//const houseNumber = 157;
//const tenant = "John Doe ";
//const isMarried = false;
//const age = null;
//const lname = undefined;

//console.log(tenant +"lives in " + streetName + "at house number " + houseNumber);

//console.log(`${tenant} lives in ${streetName} at house number ${houseNumber}`);

//console.log(tenant.toUpperCase));

//const cars = ["bmw", "audi", "ford"];

//console.log(cars);

//cars.pop();
//cars.push("toyota");
//cars.unshift("toyota");

//console.log(cars);

//object

//const person = {
  //  name1: "Abdullajon",
   // age: 14,
    //isStudent: true,
    //adress:{
      //  street: "Main st",
        //houseNumber: 123
    //}
//}

//console.log(person.name1, person.adress.street);

//const { name1, age, isStudent, adress:{street} } = person;

//console.log(name1, age, isStudent, street);

  //console.log(JSON.stringify(person));  

 const students = [
{
     fname: "John Doe",
     age: 23,
      graduated: false,
},
{
   fname: "Jane Smith",
   age: 21,
   graduated: true,
},
{
   fname: "Bob Mark",
   age: 34,
   graduated: true
}
];
    //console.log(student[0]);
    // array function, forEach, splice, slice, filter, map,

     const graduated = students.filter(function(student) {
     return student.graduated === true;
     }) .map( s => { return s.fname;
     })  

    console.log(graduated);
    console.log(students);

    


 //   for(let i = 0; i < students.length; i++){
   //     console.log(i);
    //    console.log(students[i].fname);
    //}

//    const x = 22;
//    const y = 24;
//
//    if (x > y) {
//        console.log("true");
//    }else {
//        console.log("false");
//    }

//       const score = 59;
       
//       if (score >=90){
//           console.log("You got A");
//       }else if (score < 90 && score >= 80){
//            console.log("You got B");
//      }else if (score < 80 && score >= 70){
 //          console.log("You got C");
 //      }else if (score < 70 && score >= 60){
 //          console.log("You got D");
 //      }else{
 //          console.log("You failed");
 //      }

//        const score = 51;

//        if (score > 50 || score >= 90){
//            console.log("true");
//        }else{
//            console.log("false");
//        }

//          const score = 82;
          
//          const result = score > 70 ? "A" : "B";
//          console.log(result);

//          function greet(time){
//              switch (time){
//                case "morning":
//                    console.log("Good morning");
//                    break;
//                case "afternoon":
//                    console.log("Good afternoon");
//                    break;
//                case "evening":
//                    console.log("Good evening");
//                    break;             
//           }  
//           }  
//           greet("evening")