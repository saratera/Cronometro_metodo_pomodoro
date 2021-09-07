let botao = document.getElementById('iniciar');
botao.addEventListener('click', play)

function cronometro(m_init){
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    minutos.innerHTML= '' + m_init - 1;
    segundos.innerHTML = '59'

    let m = m_init - 1;
    let s = 59;
    let contador = setInterval(()=>{

        minutos.innerHTML = (m > 9 ) ? ('' + m) : ('0' + m);
        segundos.innerHTML = ( s > 9) ? ('' + s) : ('0' + s);

        if(s > 0) s -= 1;
        else if(s == 0 && m > 0){ s = 59; m -= 1;}
        else{ m = m_init}
    }, 1000);  
    
}


function play(){
    cronometro(25)
  
}
