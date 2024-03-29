const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// UI Objesini Başlatma

const ui = new UI();
// Storage objesi üret
const storage = new Storage();
// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
}

function addFilm(e) {
const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

if (title == "" || director == "" || url == "") {
    // Hata
    ui.displayMessages("Tüm alanları doldurun...","danger");
}
else{
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); //Arayüze film ekleme
    storage.addFilmtoStorage(newFilm); // Storage'a Film Ekleme
    ui.displayMessages("film yüklendi","success");
}

ui.clearInputs(titleElement,urlElement,directorElement);

e.preventDefault();
}