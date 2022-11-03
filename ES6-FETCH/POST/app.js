class Request {
    post(url,data){
       
        return new Promise ((resolve, reject) => {
            fetch(url,{
               
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));  
            
        })
       
    }
}

const request = new Request();

request.post("http://127.0.0.1:5500/ES6-FETCH/example.json", {userId:1, title:"26"})

.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

