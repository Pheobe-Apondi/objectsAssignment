// Create a function constructor called Employee that accepts a name, position, and salary. 
// Create an array of 5 employees. 
// Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee (name,position,salary){

   this.name = name
   this.salary = salary
   this.position = position

}


let employees = [
   new Employee ("Alice Mambo","developer",80000),
   new Employee ("John Mamboleo","product manager",120000),
   new Employee ("Alice Kesho","developer",150000),
    new Employee("John Kelly","developer",80000),
    new Employee("Carol Maisha","product manager",90000)
]

employees.forEach(employee=>{
   if(employee.position == "developer"){
    employee.salary*=1.10
   }
})

console.log(employees)



// Given an array of product objects (each with name, price, and inStock properties),
//  write a function that returns a new array containing only the products that are inStock:
//  true, and sort the available products by price in ascending order. (5 pts)

function inventory (products){

   let availableProducts = products.filter(item => item.inStock ===true)
   availableProducts.sort((a,b)=>a.price -b.price)
       console.log(availableProducts)
}

let products = [
    {name:"Dove Soap",price:800,inStock:true},
    {name:"Ginger Soap",price:200,inStock:false},
    {name:"Turmeric Soap",price:500,inStock:true},
    {name:"Honey Soap",price:700,inStock:true},
]
inventory(products)


 //Create an object called grades where the keys are student names and the values are arrays of their scores. 
 // Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise,
 //  print "Fail" next to their name. (5 pts)

 function studentStatus(grades){
          for(let a in grades){
            let scores = grades[a]

            let average = scores.reduce((sum,score)=>sum +score,0)/scores.length
            let passStatus = average > 70 ? "Pass":"Fail"

            console.log(`${a}: Average Scores = ${average} - ${passStatus}`)
          }
 }

 let grades ={
    Alicia:[60,40,60,45,55],
     Keys:[25,40,100,89,100],
     David:[62,70,60,65,85]
 }
 

 studentStatus(grades)

 //Write a function constructor called User that takes username, email, and isActive (boolean).
 // Create an array of users. Write a program that loops through the array 
 // and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) 
 // and print out the usernames of active users. (5 pts)

 function User(username,email,isActive){

    this.username = username
    this.email = email
    this.isActive = isActive
 }

 let users = [
    {username:"Ann",email:"ann@example.com", isActive:true},
    {username:"alice24",email:"alice@example.com", isActive:true},
    {username:"joan34",email:"joan@example.com", isActive:true},
    {username:"joan",email:"joan24@example.com", isActive:true},
    {username:"kembo",email:"kembo@example.com", isActive:true}
 ]

 users.forEach(user =>{
    if(Math.random()<0.5)
        user.isActive = false;
})
users.filter(user  => {if(user.isActive)
    console.log(user.username)})

 // You have an array of destination objects, each with name, distance (in km),
 //  and budgetRequired (in dollars). Write a function that accepts a maximum distance and
 //  a budget and returns all destinations the user can afford and reach within that distance.
 //  If none are found, return "No destinations available under your budget and distance". (5 pts)

function perfectDestination(maxDistance,maxBudget){
    let availableDestination = destinations.filter(destination => 
        destination.distance<=maxDistance && destination.budgetRequired <= maxBudget
    );

    if(availableDestination.length >0){
        console.log(availableDestination)
    }else{
        console.log("No destination available under your budget and distance")
    }
     
}



 let destinations =[
    {name:"Maldives",distance:20000,budgetRequired:3000},
    {name:"Kyoto",distance:40000,budgetRequired:5000},
    {name:"Cayman Islands",distance:25000,budgetRequired:4500},
    {name:"Egypt",distance:1000,budgetRequired:2500}

 ]

 perfectDestination(destinations,3000,2500)




