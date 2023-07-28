function tucan(){
    document.getElementById("imagen").innerHTML="<img src='img/toucan.png' alt=''width='180px'>"    
}
function gato(){
    document.getElementById("imagen").innerHTML="<img src='img/cat.png' alt=''width='180px'>"
}
function zorro(){
    document.getElementById("imagen").innerHTML="<img src='img/fox.png' alt=''width='180px'>"
}
function koala(){
    document.getElementById("imagen").innerHTML="<img src='img/koala.png' alt=''width='180px'>"
}
function ardilla(){
    document.getElementById("imagen").innerHTML="<img src='img/squirrel.png' alt=''width='180px'>"
}
function reiniciar(){
    document.getElementById("imagen").innerHTML="<img src='img/wild-animals.png' alt=''width='180px'>"
    document.getElementById("imagen2").innerHTML="<img src='img/wild-animals.png' alt=''width='180px'>"
    document.getElementById("imagen3").innerHTML="<img src='img/wild-animals.png' alt=''width='180px'>"
    document.getElementById("input1").value=""
    document.getElementById("input2").value=""
}
function buscar(){
    let animal=document.getElementById("input1").value
    switch (animal) {
        case "1":
            document.getElementById("imagen2").innerHTML="<img src='img/toucan.png' alt=''width='180px'>"
            document.getElementById("texto").innerHTML="<b>Tucán</b>"
        break
        case "2":
            document.getElementById("imagen2").innerHTML="<img src='img/cat.png' alt=''width='180px'>"
            document.getElementById("texto").innerHTML="<b>Gato</b>"
        break
        case "3":
            document.getElementById("imagen2").innerHTML="<img src='img/fox.png' alt=''width='180px'>"
            document.getElementById("texto").innerHTML="<b>Zorro</b>"
        break
        case "4":
            document.getElementById("imagen2").innerHTML="<img src='img/koala.png' alt=''width='180px'>"
            document.getElementById("texto").innerHTML="<b>Koala</b>"
        break
        case "5":
            document.getElementById("imagen2").innerHTML="<img src='img/squirrel.png' alt=''width='180px'>"
            document.getElementById("texto").innerHTML="<b>Ardilla</b>"
        break
        default:
            document.getElementById("imagen2").innerHTML="Número incorrecto"
        break
    }
}
function contar(){
    let animal=document.getElementById("input2").value
    switch (animal) {
        case "1":
            document.getElementById("imagen3").innerHTML="<img src='img/toucan.png' alt=''width='180px'>"
            document.getElementById("texto2").innerHTML="<b>La palabra tiene: 5 letras</b>"            
        break
        case "2":
            document.getElementById("imagen3").innerHTML="<img src='img/cat.png' alt=''width='180px'>"
            document.getElementById("texto2").innerHTML="<b>La palabra tiene: 4 letras</b>"
        break
        case "3":
            document.getElementById("imagen3").innerHTML="<img src='img/fox.png' alt=''width='180px'>"
            document.getElementById("texto2").innerHTML="<b>La palabra tiene: 5 letras</b>"
        break
        case "4":
            document.getElementById("imagen3").innerHTML="<img src='img/koala.png' alt=''width='180px'>"
            document.getElementById("texto2").innerHTML="<b>La palabra tiene: 5 letras</b>"
        break
        case "5":
            document.getElementById("imagen3").innerHTML="<img src='img/squirrel.png' alt=''width='180px'>"
            document.getElementById("texto2").innerHTML="<b>La palabra tiene: 6 letras</b>"
        break
        default:
            document.getElementById("imagen3").innerHTML="Número incorrecto"
            document.getElementById("texto2").innerHTML=""  
        break
    }
}
