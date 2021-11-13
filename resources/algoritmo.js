function cifrarTrans(idMensaje,idClave){
    //variables
    var msgEncriptado="";
    var letraencriptada=0;

    //Obtenemos los valores del mensaje
    var clave = parseInt(document.getElementById(idClave).value);
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    //Verificacion de variables
    //console.log(typeof(mensaje)+" "+typeof(clave));
    //console.log(mensaje+" "+clave);

    //Codificación
    

    //Escribimos en nuestra caja de salida
    document.getElementById("resultado").innerText ="Resultado: "+ msgEncriptado; 
    console.log(msgEncriptado);
    return msgEncriptado;
}

function desCifrarTrans(idMensaje,idClave){
    //variables
    var msgdesEncriptado="";
    var letradesEncriptada=0;

    //Obtenemos los valores del mensaje
    var clave = parseInt(document.getElementById(idClave).value);
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();

    //Desifrar
    

    document.getElementById("resultado").innerText ="Resultado: "+ msgdesEncriptado;
    console.log(msgdesEncriptado);
    return msgdesEncriptado;
}