function crearCuenta(nombre,debe,haber){
    var cuentas = document.getElementById("cuentas");
    //creacion del div
    var div = document.createElement("div");
    div.setAttribute("class","elemento");

    //creacion de los modificadores de cuenta
    var labelD = document.createElement("label");
    labelD.setAttribute("for","inputD");
    var txtlabelD = document.createTextNode("Debe: ");
    labelD.appendChild(txtlabelD);
    div.appendChild(labelD);
    var inputD = document.createElement("input");
    inputD.setAttribute("type","text");
    inputD.setAttribute("id","inputD");
    div.appendChild(inputD);

    var labelH = document.createElement("label");
    labelH.setAttribute("for","inputH");
    var txtlabelH = document.createTextNode("Haber: ");
    labelH.appendChild(txtlabelH);
    div.appendChild(labelH);
    var inputH = document.createElement("input");
    inputH.setAttribute("type","text");
    inputH.setAttribute("id","inputH");
    div.appendChild(inputH);

    var boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","poner");
    var txtBoton = document.createTextNode("Añadir");
    boton.appendChild(txtBoton);
    boton.onclick = function(){
        var trA = document.createElement("tr");
        var tdAD = document.createElement("td");
        var txttdAD = document.createTextNode(inputD.value);
        tdAD.appendChild(txttdAD);
        trA.appendChild(tdAD);
        table.appendChild(trA);
        var tdAH = document.createElement("td");
        var txttdAH = document.createTextNode(inputH.value);
        tdAH.appendChild(txttdAH);
        trA.appendChild(tdAH);
        table.appendChild(trA);
        inputD.value = "";
        inputH.value = "";
    }
    div.appendChild(boton);



    //creacion de la tabla
    var table = document.createElement("table");
    var caption = document.createElement("caption");
    var txtCaption = document.createTextNode(nombre);
    caption.appendChild(txtCaption);
    table.appendChild(caption);

    var tr1 = document.createElement("tr");
    var th1 = document.createElement("th");
    var txtth1 = document.createTextNode("Debe");
    th1.appendChild(txtth1);
    tr1.appendChild(th1);
    var th2 = document.createElement("th");
    var txtth2 = document.createTextNode("Haber");
    th2.appendChild(txtth2);
    tr1.appendChild(th2);
    table.appendChild(tr1);

    var tr2 = document.createElement("tr");
    var td11 = document.createElement("td");
    var txttd11 = document.createTextNode(debe);
    td11.appendChild(txttd11);
    tr2.appendChild(td11);
    var td22 = document.createElement("td");
    var txttd22 = document.createTextNode(haber);
    td22.appendChild(txttd22);
    tr2.appendChild(td22);
    table.appendChild(tr2);
    div.appendChild(table);

    cuentas.appendChild(div);
}

function crearDiario(nombre,debe,haber){
    var diario = document.getElementById("diario");

    //creacion div
    var div = document.createElement("div");
    div.setAttribute("class","elemento");

    var p = document.createElement("p");
    var txtP = document.createTextNode("Dia X " + debe + "de " + nombre);
    p.appendChild(txtP);
    div.appendChild(p);

    diario.appendChild(div);
}

window.onload = function () {
    var bAnadir = document.getElementById("anadir");

    //aqui empiezo a crear el dom.
    //aqui soy un master

    bAnadir.onclick = function(){
        var debe = document.getElementById("debe");
        var haber = document.getElementById("haber");
        var nombre = document.getElementById("cuenta");

        var nombreValor = nombre.value;
        var debeValor = debe.value;
        var haberValor = haber.value;


        //llamar la funcion

        crearCuenta(nombreValor,debeValor,haberValor);
        //crearDiario(nombreValor,debeValor,haberValor);

        //vaciar los inputs
        nombre.value = "";
        debe.value = "";
        haber.value = "";

    }

}