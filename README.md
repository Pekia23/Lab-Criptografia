# 🔐 Laboratorio - Criptografía con Tampermonkey y CryptoJS

Este laboratorio tiene como objetivo desarrollar un script con **Tampermonkey** que descifre mensajes ocultos en una página web usando la librería **CryptoJS**. Se espera que el script obtenga automáticamente la clave de cifrado, la cantidad de mensajes y los mensajes en texto plano desde el HTML de un sitio web público.

## 📋 Descripción general

El informante ha dejado mensajes cifrados en el sitio web:  
🔗 [https://cripto.tiiny.site](https://cripto.tiiny.site)  

El reto consiste en interceptar, descifrar e imprimir los mensajes usando un script que se ejecuta automáticamente al visitar la página, sin intervención del usuario.

## 💻 Tecnologías utilizadas

- [Tampermonkey](https://www.tampermonkey.net/)  
- [CryptoJS](https://cdnjs.com/libraries/crypto-js)  
- JavaScript  
- SRI (Subresource Integrity)

## 🎯 Objetivos del script

- Detectar el algoritmo de cifrado utilizado (3DES).
- Obtener la **key** de descifrado directamente del HTML.
- Calcular la cantidad de mensajes cifrados.
- Imprimir por consola:
  - La key obtenida.
  - Número de mensajes cifrados.
  - Cada mensaje cifrado junto a su equivalente descifrado.
- Mostrar los mensajes en texto plano dentro del mismo sitio web.
- Asegurar que el script funcione incluso si el contenido cambia (texto y cantidad de mensajes variable).

---

## 🛠️ Desarrollo por partes

### 🔑 Parte 1: Obtener la clave

- Se analiza el HTML y se extraen las letras mayúsculas desde un `<p>`, eliminando espacios.
- Se usa una función que detecta frases con punto final y extrae la primera letra en mayúscula para formar la key.

### 🌐 Parte 2: Filtrado por URL y cantidad de mensajes

- El script se activa solo en la URL del informante usando `@match`.
- Se escanean los elementos `<div class="M">` para contar los mensajes cifrados.

### 🧪 Parte 3: Descifrado y visualización

- Se importa la librería CryptoJS desde CDNJS con su hash SRI.
- Se utiliza `TripleDES.decrypt` con modo ECB y la clave obtenida para descifrar cada mensaje.
- Se imprime cada mensaje en consola y se muestra también en el HTML como elementos `<p>`.

---

## ⚠️ Consideraciones y mejoras

> 🛠️ **Nota:** Aunque el script cumple con los objetivos propuestos, existen oportunidades para mejorarlo:
- Incorporar detección de errores y manejo de excepciones.
- Agregar validaciones adicionales al extraer la clave.
- Modularizar el código para mayor legibilidad y reusabilidad.
- Considerar otros métodos de cifrado o compatibilidad extendida con diferentes páginas.

