class Request {
   async get(url){
        // return new Promise ((resolve, reject) => {
        //     fetch(url)
        //     .then(response => response.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));    
        // })
        const response = await fetch(url); // rESPONSE oBJECT

        const data = await Response.json() // JSON Object

        return data;
    }

   async post(url,data){
       
        // return new Promise ((resolve, reject) => {
        //     fetch(url,{
               
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-Type": "application/json; charset=UTF-8"
        //         }
        //     })
            
        //     .then(response => response.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));  
            
        // })

        const response = await fetch(url,{
            
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
        
            }); // Response Object

            const data = await response.json();
            return data;
    }


    
    async put(url,data){
       
        // return new Promise ((resolve, reject) => {
        //     fetch(url,{
               
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-Type": "application/json; charset=UTF-8"
        //         }
        //     })
            
        //     .then(response => response.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));  
            
        // })

        const response = await fetch(url,{
            
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
    
        }); // Response Object

        const responsedata = await response.json();
        return responsedata;
       
    }

    //DELETE

   async delete(url){
       
        // return new Promise ((resolve, reject) => {
        //     fetch(url,{
               
        //         method: 'DELETE',
                
        //     }) .then(response => resolve("Veri işlemi başarılı"))
        //     .catch(err => reject(err));  
        // })
       

        const response = await fetch('http://127.0.0.1:5500/ES6-FETCH/example.json/1',{
            method: 'DELETE'
        }) // Response Object

        // const data = await response.json();

        return "Veri silme işlemi başarılı";
    }
}

const request = new Request();
// request.get("/ES6-FETCH/example.json")
// .then(albums =>{
//     console.log(albums);
// })
// .catch(err => console.log(err));


// request.post("http://127.0.0.1:5500/ES6-FETCH/example.json", {userId:1, title:"26"})

// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("http://127.0.0.1:5500/ES6-FETCH/example.json/1", {userId:1, title:"tarkan karma"})

// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));


// request.delete("http://127.0.0.1:5500/ES6-FETCH/example.json/1")
// .then(message => console.log(message))
// .catch(err => console.log(err));