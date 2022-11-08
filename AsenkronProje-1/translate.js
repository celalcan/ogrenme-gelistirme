function Translate(word,language){
    this.apikey = "AIzaSyDTcpUGL8ef32JBls4v2KHq-A09Pzbdec4";
    this.word = word;
    this.language = language;

    //XHR object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://www.googleapis.com/language/translate/v2/?key=${this.apikey}&q=${this.word}&target=${this.language} `;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text= json.data.translations[0].translatedText;
           callback(null,text);
            // console.log(JSON.parse(this.xhr.responseText).data.translations[0].translatedText);
        } else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}