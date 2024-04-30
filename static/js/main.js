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

    
    }

    setInterval(auladaBia, 1000)
    setTimeout(auladaBia, 1000)



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    
    m = ChecarTempo(m);
    s = ChecarTempo(s);

    if (h < 10)
    document.getElementById('txt').innerHTML = "0" + h + ":" + m;
    else
    document.getElementById('txt').innerHTML = h + ":" + m ;
    
    setTimeout(startTime, 10000);
}


function ChecarTempo(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
