let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("container");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";

}



/* Funçao que contabiliza quanto tempo até o fim da aula */

function auladaBia() {
    let agora = new Date();
    let fimDoDia = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), 21, 45, 0, 0);
    let diferenca = fimDoDia - agora;
    let horas = Math.floor(diferenca / 1000 / 60 / 60);
    diferenca -= horas * 1000 * 60 * 60;
    let minutos = Math.floor(diferenca / 1000 / 60);
    diferenca -= minutos * 1000 * 60;
    let segundos = Math.floor(diferenca / 1000);
    document.getElementById('aulatempo').innerHTML = `Faltam ${horas} horas, ${minutos} minutos e ${segundos} segundos para o fim da aula!`;

    if(horas > 2.5 && horas > 0){
        let agora = new Date();
        let fimDoDia = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), 19, 15, 0, 0);
        let diferenca = fimDoDia - agora;
        let horas = Math.floor(diferenca / 1000 / 60 / 60);
        diferenca -= horas * 1000 * 60 * 60;
        let minutos = Math.floor(diferenca / 1000 / 60);
        diferenca -= minutos * 1000 * 60;
        let segundos = Math.floor(diferenca / 1000);
        document.getElementById('aulatempo').innerHTML = `Faltam ${horas} horas, ${minutos} minutos e ${segundos} segundos para o começo da aula!`;
    }

    if(horas < 0) {
        document.getElementById('aulatempo').innerHTML = "Fim da aula!";  
    } 


    }

    setInterval(auladaBia, 1000)
    setTimeout(auladaBia, 1000)

/* Funçao que mostra o horário atual */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = ChecarTempo(m);
    s = ChecarTempo(s);
        
    
    if (h < 10)
    document.getElementById('horas').innerHTML = "0" + h + ":" + m;
    else 
    document.getElementById('horas').innerHTML = h + ":" + m ;

    setTimeout(startTime, 1000);
}

/* Funçao que atualiza o horário */

function ChecarTempo(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
