# 🕵️‍♀️ Laboratorio 4 - Criptografía Web con Tampermonkey

Este proyecto consiste en un script desarrollado para Tampermonkey que permite interceptar, descifrar y visualizar mensajes cifrados en un sitio web público usando técnicas de análisis criptográfico. Se aplicó el algoritmo TripleDES junto con la librería CryptoJS y verificación SRI.

🔗 **Sitio objetivo:** [https://cripto.tiiny.site/](https://cripto.tiiny.site/)  

---

## 🚀 ¿Qué hace este script?

El script tiene tres funcionalidades principales:

1. **Obtención automática de la llave de cifrado:**  
   Analiza el contenido del sitio web para construir automáticamente la clave secreta a partir del primer carácter de cada oración del texto principal.

2. **Reconocimiento de mensajes cifrados:**  
   Detecta dinámicamente cuántos mensajes cifrados existen en el HTML basándose en una clase específica (`class*="M"`).

3. **Descifrado de los mensajes:**  
   Utiliza el algoritmo `TripleDES` en modo `ECB` y padding `Pkcs7` para descifrar los mensajes. Luego:
   - Imprime la clave, cantidad de mensajes y cada par mensaje cifrado / mensaje descifrado en consola.
   - Inserta los mensajes descifrados como texto plano en el sitio web.

---

## 🧠 Lógica del Script
```js
var key = CryptoJS.enc.Utf8.parse(concatenacion);
var mensaje_descifrado = CryptoJS.TripleDES.decrypt(mensaje_cifrado, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
```
  ✅ El código es lo suficientemente abstracto para adaptarse a cualquier cantidad de mensajes o texto fuente en el sitio objetivo.

  
---
## 🛡️ Seguridad
Se implementa la librería CryptoJS vía CDN con un hash SRI (Subresource Integrity) para evitar la manipulación de código de terceros:

js
// @require https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUD...

---
## 📦 Estructura del Proyecto
- @match: El script solo se ejecuta en https://cripto.tiiny.site/
- CryptoJS: Cifrado y descifrado de los mensajes
- console.log: Se muestran mensajes útiles en consola para depuración
- document.body.appendChild(): Inserta mensajes descifrados directamente en la web
