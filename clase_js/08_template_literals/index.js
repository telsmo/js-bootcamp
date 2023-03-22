/*
El DOM (Document Object Model) en HTML es una representación en memoria del documento HTML que se ha cargado en un navegador web. Esencialmente, el DOM es una estructura de árbol jerárquica que representa la estructura del documento HTML.

El DOM se compone de objetos que representan los elementos, atributos, texto y otros contenidos del documento HTML. Cada elemento HTML en el documento se representa como un nodo en el árbol del DOM, con los nodos secundarios que representan elementos anidados y sus contenidos.

El DOM permite a los desarrolladores web manipular dinámicamente el contenido y la apariencia de una página web utilizando JavaScript u otras tecnologías de scripting. Por ejemplo, un desarrollador puede usar el DOM para cambiar el contenido de un elemento, agregar o eliminar elementos o modificar los atributos de un elemento en respuesta a la interacción del usuario o eventos del navegador.
*/
const texto = document.getElementById("texto");
const autor = "chatGPT";

texto.innerText+=`El DOM (Document Object Model) en HTML es una representación en memoria del documento HTML que se ha cargado en un navegador web. Esencialmente, el DOM es una estructura de árbol jerárquica que representa la estructura del documento HTML.

El DOM se compone de objetos que representan los elementos, atributos, texto y otros contenidos del documento HTML. Cada elemento HTML en el documento se representa como un nodo en el árbol del DOM, con los nodos secundarios que representan elementos anidados y sus contenidos.

El DOM permite a los desarrolladores web manipular dinámicamente el contenido y la apariencia de una página web utilizando JavaScript u otras tecnologías de scripting. Por ejemplo, un desarrollador puede usar el DOM para cambiar el contenido de un elemento, agregar o eliminar elementos o modificar los atributos de un elemento en respuesta a la interacción del usuario o eventos del navegador.

texto generado por ${autor}`