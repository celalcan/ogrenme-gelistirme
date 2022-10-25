// Http status
// 200 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized // herhangi bir istekte bulunulmadı
// 1: server connection established // server bağlantısı başarılı
// 2: request received  //request alındı
// 3: processing request // server bu request'i aldı ve işlemeye başladı
// 4: request finished and response is ready // response hazır olduğunu söylüyor


document.getElementById("btn").addEventListener("click", function(){
    // XMLHttpRequset
    const xhr = new XMLHttpRequest();
   /*  console.log(xhr); */

    // xhr.onreadystatechange = function() {
    //     /* console.log(this.readyState); */
    //     /* console.log(this.status); */
    //     if (this.status == 200 && this.readyState == 4 ){
    //         // Response Hazır
    //         console.log(this.responseText);
    //     }
    // }
    // xhr.onprogress = function() {
    //     console.log("process İşleniyor...",this.readyState);
    // }

    xhr.onload = function() {
        if (this.status===200){
           document.getElementById("ajax").textContent = this.responseText;
        }
    }
    xhr.open("GET","example.txt",true);
    xhr.send();
});