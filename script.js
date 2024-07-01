function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else{
        window.alert('Nada a ser calculado')
    }
}

function toggleColors() {
    document.body.classList.toggle('new-color-scheme');
    document.body.style.backgroundImage = 
        document.body.classList.contains('new-color-scheme') ?
        'linear-gradient(45deg, rgba(110, 5, 172, 0.685), rgba(58, 54, 61, 0.849))' :
        'linear-gradient(45deg, rgba(252, 67, 169, 0.603), rgba(181, 240, 250, 0.568))';
}

document.querySelector('.toggle-color-button').addEventListener('click', toggleColors);
