// import {Person} from "./app1";
// import {Employee} from "./app2";

// Person.Test();
// Employee.Test();



// const app = require("./module1");

// console.log(app.name);
// app.test1();
// console.log(app.person.name);


//ES6 Modules

// import {test,employee,Person,name } from "./module1.js";

// Person.Test();
// test();
// console.log(employee.salary);

//Tek tek yazmak yerine export edilen her şeyi almak

import * as module1 from "./module1.js";

// console.log(module1);
console.log(module1.employee.salary);
module1.Person.Test();