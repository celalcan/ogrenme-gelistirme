
document.getElementById("change").addEventListener("click", change);

function change(){
    const xhr= new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:5500/AJAX-External-Api/a.html");

    xhr.onload = function() {
        if (this.status){
            const response= JSON.parse(this.responseText);
             console.log(this.responseText);

        /*     const rate = response.retes.TRY
            const amount =Number(document.getElementById("amount").value);
            document.getElementById("tl").value=amount*rate; */
        }
    }
    xhr.send();
}