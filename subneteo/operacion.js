
var ip, mask,
subred, resultado,
bitprestado, newmask,
saltodered, tblBody,
hilera, celda, textoCelda;
function mtdResolver(){
    ip = document.getElementById('txt_ip').value;
    mask = document.getElementById('txt_mask').value;
    subred = document.getElementById('txt_subred').value;
    bitprestado = prestarBits(subred);
    newmask = nuevaMascara(bitprestado);
    
    saltodered = saltodeRed(newmask);
    
    console.log('BITS PRESTADOS: ' + bitprestado);
    console.log('MASCARA FINAL : ' + newmask);
    console.log('SALTO DE RED  : ' + saltodered);

    resultado = 0;
    tblBody = document.getElementById("tabladinamica");
    for(var i = 0; i < 4; i++){
        hilera = document.createElement("tr");
        for(var j=0; j <=4; j++){
            celda = document.createElement("td");
            switch(j){
                case 0:
                    textoCelda = document.createTextNode(i+1);  
                    break
                case 1:
                    textoCelda = document.createTextNode(resultado);        
                    break;
                case 2:
                    textoCelda = document.createTextNode(resultado+1);        
                    break;
                case 3:
                    textoCelda = document.createTextNode((resultado+saltodered)-2);        
                    break;
                case 4:
                    textoCelda = document.createTextNode((resultado+saltodered)-1);
                    resultado = resultado + saltodered;
                    break;
            }

            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }

}

function prestarBits(numero){
    resultado = 0;
    for(var i=1; i <= 8 ; i++){
        resultado = 2 ** i;
        if(resultado >= numero){
            resultado = i;
            break;
        }
    }
    return resultado;
}

function nuevaMascara(numero){
    resultado = 0;
    for(var i=7; i >=0; i--){
        resultado = resultado + 2**i;
        --numero;
        if(numero == 0){ break;}
    }
    return(resultado);
}

function saltodeRed(numero){
    resultado = 0;
    resultado = 256 - numero;
    return resultado;
}

function creartabla(){
    for(var i = 0; i < 2; i++){
        for(var j=0; j <2; j++){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    
} 