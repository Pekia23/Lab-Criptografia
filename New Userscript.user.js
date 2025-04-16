// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("hola");
    function obtenerConcatenacionPrimerCaracter(parrafo) {
        var oraciones = parrafo.split('.');
        var resultado = '';
        for (var i = 0; i < oraciones.length; i++) {
            var oracion = oraciones[i];
            var primerCaracter = oracion.charAt(0);
            resultado += primerCaracter;
        }
        return resultado;
    }
    var parrafo = document.body.textContent;
    var parrafos = parrafo.replace(/\s+/g, '');
    var concatenacion = obtenerConcatenacionPrimerCaracter(parrafos);
    console.log("La llave es: ", concatenacion);

    var elementos = document.querySelectorAll('[class*="M"]');
    var cant = 0;
    for (var i = 0; i < elementos.length; i++) {
        cant++;
    }
    console.log("Los mensajes cifrados son: ", cant);

    var key = CryptoJS.enc.Utf8.parse(concatenacion);
    for (var x = 0; x < elementos.length; x++) {
        var mensaje_cifrado = elementos[x].id;
        var mensaje_descifrado = CryptoJS.TripleDES.decrypt(mensaje_cifrado, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        console.log(mensaje_cifrado.toString() + " " + mensaje_descifrado.toString(CryptoJS.enc.Utf8));

    var nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = mensaje_descifrado.toString(CryptoJS.enc.Utf8);
    document.body.appendChild(nuevoElemento);
    }
})();