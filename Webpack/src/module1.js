// module.exports.test1 = function test1(){
//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){
//     console.log("Test 2");
// }


// module.exports = {
//     name: "Celalcan",
//     test1: function (){
//         console.log("Test 1");
//     },
//     person: {
//         name: "Celalcan",
//         mail:"celalcan@gmail.com"
//     }
// }


//ES6 Modules

export const  name = "Celalcan";
export function test(){
    console.log("Test Fonksiyonu");
}

export class Person {
    static Test(){
        console.log("Person Test");
    }
}

export const employee = {
    name: "Celaclan",
    salary:25000
}