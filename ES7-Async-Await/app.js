// async function  test(daa){
//     //Promise return new Promise
//     //return data;

//     let promise = new Promise ((resolve,rejec)=>{
//         setTimeout(()=>{
//             resolve("Bu bir değerdir.");
//         },5000);
//     });

//     let response = await promise; // 5 saniye bekleyecek

//     return response;
// }

// test("Merhaba").then(response=> console.log(response));



// async function testData(data) {
//     let promise = new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             if (typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 reject (new Error ("Lütfen string bir değer giriniz"));
//             }
//         },5000);
//     });

//     const response = await promise;

//     return response;
// }

// testData(24)
// .then(data => console.log(data))
// .catch (err => console.log(err));



async function getCurrency(url)
{
    const response = await fetch(url); // Response Object

    const data = await response.json(); // Json object

    return(data);
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response));