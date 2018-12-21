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

function crearDiario(dia,cuentaD,cantidadD,cuentaH,cantidadH){
    var diario = document.getElementById("diario");

    //creacion de un div
    var div = document.createElement("div");
    div.setAttribute("class","elemento");

    //creacion de modificadores de datos
    var labelCuentaD = document.createElement("label");
    labelCuentaD.setAttribute("for","inputCuentaD");
    var txtLabelCuentaD = document.createTextNode("Cuenta Debe");
    labelCuentaD.appendChild(txtLabelCuentaD);
    div.appendChild(labelCuentaD);
    var inputCuentaD = document.createElement("input");
    inputCuentaD.setAttribute("type","text");
    inputCuentaD.setAttribute("id","inputCuentaD");
    div.appendChild(inputCuentaD);


    //Creacion del interior
    var pDia = document.createElement("p");
    var txtPDia = document.createTextNode("Día " + dia.value);
    pDia.appendChild(txtPDia);
    div.appendChild(pDia);

    //creacion de contenido con los datos
    var p = document.createElement("p");
    var txtP = document.createTextNode(cantidadD.value + " " + cuentaD.value + " a " + cuentaH.value + " " + cantidadH.value);
    p.appendChild(txtP);
    div.appendChild(p);

    //añadir la creacion al div general
    diario.appendChild(div);


}

window.onload = function () {
    var bAnadir = document.getElementById("anadir");
    var btnDiario = document.getElementById("btnDiario");

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

        //vaciar los inputs
        nombre.value = "";
        debe.value = "";
        haber.value = "";

    }
    btnDiario.onclick = function () {
        var dia = document.getElementById("dia");
        var cuentaD = document.getElementById("cuentaD");
        var cantidadD = document.getElementById("cantidadD");
        var cuentaH = document.getElementById("cuentaH");
        var cantidadH = document.getElementById("cantidadH");

        crearDiario(dia,cuentaD,cantidadD,cuentaH,cantidadH);
    }

}