class Request {
    get(url){
        return new Promise ((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));    
        })
    }
}

const request = new Request();
let albums;
request.get("/ES6-FETCH/example.json")
.then(albums =>{
    console.log(albums);
})
.catch(err => console.log(err));

//console.log(albums); //Asenkron