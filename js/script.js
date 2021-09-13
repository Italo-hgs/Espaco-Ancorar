function abrirMenu(){
    var x = document.getElementById('open');
    if(x.style.display === 'block'){
        x.style.display = 'none';
    }else{
        x.style.display = 'block';
    }
}

function fecharMenu(){
    var close = document.getElementById('open');
    if(close.style.display === 'block'){
        close.style.display = 'none';
    }
}