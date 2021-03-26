
var btnVerificar = document.querySelector('input#btnVerifica');
btnVerificar.addEventListener('click', verificarVel);

function verificarVel (){
    var vel = (document.querySelector('input#velocidade').value);
    var res = document.querySelector('div#resultado');
    var img = document.querySelector('img#topo');

    if (vel > 60){

        res.innerHTML = `Sua velocidade é de: ${vel} KM/H , você ultrapassou o limite!`;
        document.querySelector('img#topo').src = "https://lh3.googleusercontent.com/proxy/yyrHTZJhzZMWiJqpOkfSpx1zCCZeVSs3-akAIqgz65bVFh703KN390bsMqP3a5pE7r4WHZYwEj5bTSL8IkLwZskATmlyEFC6Hkyt9Qcy_Fs6VinwkLWWG-yewLinJEMYHNfjKmQ";
        document.body.style.backgroundColor = "red";
        
    }else{
        res.innerHTML = `Sua velocidade é de: ${vel} KM/H, está dentro do limite de velocidade, parabéns!`;
        document.querySelector('img#topo').src = "https://www.seguradoralider.com.br/Blog/PublishingImages/Lists/Postagens/AllItems/velocidade--seguranca.png";
        document.body.style.backgroundColor = "green";
    }
}
