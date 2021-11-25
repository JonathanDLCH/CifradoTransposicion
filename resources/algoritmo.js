function cifrarTrans(idMensaje,idClave){
    //variables
    var matrizT = new Array();
    var msgEncriptado="";

    //Obtenemos los valores del mensaje
    var clave = document.getElementById(idClave).value.toLowerCase();
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    var lonclave = clave.length;

    if(lonclave>mensaje.length || ocurrencias(clave)){
        //Verificamos las condiciones del algoritmo
        window.alert("No puede ser menor la longitud del mensaje o no puede repetir letras en la clave");
    }else{
        //Generamos nuestra matriz
        var ltr = 0;
        for(var i=0;i<(mensaje.length/lonclave);i++){
            matrizT[i] = new Array();
            for(var j=0;j<lonclave;j++){
                if(mensaje[ltr]!=undefined){
                    matrizT[i][j] = mensaje[ltr];
                    ltr++;
                }else{
                    matrizT[i][j] = "|";
                }
            }
        }
    }
    console.log("elementos");
    for(var element in matrizT){
        console.log(matrizT[element]);
    }

    //Ordenamos alfabeticamente la clave
    var clsorted = clave.split('').sort();
    console.log("Clave ordenada: "+clsorted);

    //Generamos nuestro mensaje cifrado
    var i=0;
    var j=0;
    while(i<=lonclave){
        if(clsorted[i]==clave[j]){
            for(var k=0; k<(mensaje.length/lonclave);k++){
                if(matrizT[k][j]!=undefined){
                    msgEncriptado = msgEncriptado+matrizT[k][j];
                }
            }
            i++;
            j=0;
        }else{
            j++;
        }
    }

    //Escribimos en nuestra caja de salida
    document.getElementById("resultado").innerText ="Resultado: "+ msgEncriptado; 
    console.log(msgEncriptado);
    return msgEncriptado;
}

function desCifrarTrans(idMensaje,idClave){
    //variables
    var matrizT = new Array();
    var mAux = new Array();
    var msgdesEncriptado="";

    //Obtenemos los valores del mensaje
    var clave = document.getElementById(idClave).value.toLowerCase();
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    var lonclave = clave.length;

    if(lonclave>mensaje.length || ocurrencias(clave)){
        //Verificamos las condiciones del algoritmo
        window.alert("No puede ser menor la longitud del mensaje o no puede repetir letras en la clave");
    }else{
        //Generamos nuestra matriz
        
        for(var i=0;i<(mensaje.length/lonclave);i++){
            matrizT[i] = new Array();
            mAux[i] = new Array();
            for(var j=0;j<lonclave;j++){
                matrizT[i][j] = "";
                mAux[i][j] = "";
            }
        }
        //LLenamos con las letras hacia abajo

        var ltr = 0;
        for(var i=0;i<(lonclave);i++){
            for(var j=0;j<mensaje.length/lonclave;j++){
                matrizT[j][i] = mensaje[ltr];
                ltr++;
            }
        }
    }
    console.log("elementos");
    for(var element in matrizT){
        console.log(matrizT[element]);
    }

    //Ordenamos alfabeticamente la clave
    var clsorted = clave.split('').sort();
    console.log("Clave ordenada: "+clsorted);

    //Generamos nuestro mensaje descifrado
    var i=0;
    var j=0;
    var index = 0;
    while(i<=lonclave){
        if(clave[i]==clsorted[j]){
            for(var k=0; k<(mensaje.length/lonclave);k++){
                if(matrizT[k][j]!=undefined){
                    mAux[k][index] = matrizT[k][j];
                }
            }
            index++;
            i++;
            j=0;
        }else{
            j++;
        }
    }

    for(var element in mAux){
        console.log(mAux[element]);
    }

    for(var i=0;i<(mensaje.length/lonclave);i++){
        for(var j=0;j<lonclave;j++){
            if(mAux[i][j]!='|'){
                msgdesEncriptado += mAux[i][j];
            }
        }
    }

    //Escribimos en nuestra caja de salida
    document.getElementById("resultado").innerText ="Resultado: "+ msgdesEncriptado; 
    console.log(msgdesEncriptado);
    return msgdesEncriptado;
}

function limpiar(){
    document.getElementById("clave").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("resultado").innerText ="Resultado: ";
}

function ocurrencias(str){
    var ocurencias= 0;
    var revisados = [];
    for (var i=0; i<str.length; i++) {
        if (!revisados.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            revisados.push(str[i]);
            ocurencias = ocurencias+1;
        }
    }

    return ocurencias;
}