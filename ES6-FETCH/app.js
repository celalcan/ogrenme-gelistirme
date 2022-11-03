function getTextFile(){
    fetch("example.txt")
    .then(response => response.text())
    .then(data=>console.log(data))
    .catch(err => console.log(err));
}

function getJsonFile(){
    fetch ("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(  data => {
        console.log(data.rates.code);
    })
    .catch (err => console.log(err));
}

//getTextFile();
// getJsonFile();
getExternalAPI();