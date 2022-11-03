class Request {

    //PUT
    // put(url,data){
       
    //     return new Promise ((resolve, reject) => {
    //         fetch(url,{
               
    //             method: 'PUT',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-Type": "application/json; charset=UTF-8"
    //             }
    //         })
            
    //         .then(response => response.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));  
            
    //     })
       
    // }

    //DELETE

    delete(url){
       
        return new Promise ((resolve, reject) => {
            fetch(url,{
               
                method: 'DELETE',
                
            }) .then(response => resolve("Veri işlemi başarılı"))
            .catch(err => reject(err));  
        })
       
    }

}

const request = new Request();

// request.put("http://127.0.0.1:5500/ES6-FETCH/example.json/1", {userId:1, title:"tarkan karma"})

// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));


request.delete("http://127.0.0.1:5500/ES6-FETCH/example.json/1")
.then(message => console.log(message))
.catch(err => console.log(err));