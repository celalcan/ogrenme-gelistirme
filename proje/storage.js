function Storage(){

}

Storage.prototype.addFilmtoStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function(){

    let films;

    if(localStorage.getItem("films")===null){
        films =[];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
   
    let films = this.getFilmsFromStorage();
    // Splice
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
}

/* Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
} */

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}