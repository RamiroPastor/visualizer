# Mis reflexiones sobre Tailwind CSS

**Resumen:** Esta herramienta es una trampa para novatos, un engañabobos y un sacacuartos.

## Introducción:

Nos encontramos, una vez más, ante el eterno debate: *DRY Css* contra *WET Css*, donde 
*DRY* viene de *Don't Repeat Yourself* y *WET* viene de *We Enjoy Typing*. En la página principal de
Tailwind CSS, inmediatamente debajo del epígrafe "Best Practices don't actually work", se puede encontrar 
un enlace al siguiente ensayo: [https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

Este muy extenso ensayo explica la motivación del autor de Tailwind CSS para crear esa herramienta. El análisis es sin duda 
inteligente y profundo, con unas líneas clave bien explicadas. En particular, me quedo con el punto de inflexión del artículo:

  1. **CSS that depends on HTML**: In this model, your HTML is restyleable, but your CSS is not reusable.
  2. **HTML that depends on CSS**: In this model, your CSS is reusable, but your HTML is not restyleable.

Merece la pena leer el artículo solamente por ese punto de inflexión, ya que es exactamente el núcleo del debate, y 
la forma clara de exponer ese punto demuestra la experiencia del autor, y una verdadera preocupación y horas de reflexión.
Tras exponer ese punto, el autor opta por la segunda opción, y desarrolla Tailwind CSS.

## Nudo:

Expongo ahora las razones por las que pienso que es un error elegir la segunda opción, es un error trabajar con CSS
de la forma en la que trabaja Tailwind CSS y por tanto es un error desarrollar y/o utilizar una herramienta como Tailwind CSS:

  1. Las buenas prácticas sí funcionan, por eso se llaman buenas prácticas.

  2. Si partes de un HTML vacío y un archivo CSS con muchas reglas para distintas etiquetas y clases, el navegador te muestra un bonito rectángulo blanco. Si partes de un archivo HTML bien construido con etiquetas y contenido, y una hoja de CSS vacía, el navegador te muestra
  una página web legible y muy fea. Este ejemplo tan tonto evidencia que CSS debe depender del HTML, porque CSS por sí solo no hace nada.

  3. Sobre la repetición:

  - Efectivamente, estoy totalmente a favor de prácticas como evitar un "copy+paste" en 10 líneas con ligeras diferencias, y abstraer 
  esa funcionalidad en un componente o una función parametrizada. Pero no se puede evitar repetir ciertos "elementos básicos". 

  No tendría sentido, por ejemplo, pensar en desarrollar una librería de ECMAScript con el principal objetivo de evitar repetir tanto la 
  palabra "function". O reinventar el castellano para no usar tanto la palabra "ya". O reinventar el castellano para no usar tanto la letra "a". Podemos, de hecho, iterar esa idea con todas las letras hasta quedarnos solo con la última, y entonces tendríamos la siguiente frase en español: "zzzzzz zzzz zz zzzzzzzzzzzzz zz zzzzzz zzzz zzzzzz zzzzzzzzzzzzz". En nuestro afán de eliminar la repetición, hemos llegado al súmmun de la repetición. Reducción al absurdo. 

  Cabría aquí reflexionar sobre los lenguajes naturales occidentales en oposición a los orientales, pero eso lamentablemente está fuera del ámbito de este ensayo.
  
  - Resulta que CSS está formado en su totalidad por elementos básicos. Si quieres que algo tenga `display: flex` no tienes otra
  opción que escribirlo, no hay atajos. Todos nos hemos encontrado ante el tedio de escribir una y otra vez las líneas 
  `display: flex; justify-content: center; align-items: center;`, pero no hay forma de evitarlo. Con Tailwind simplemente se acorta
  ligeramente ya que basta con escribir `flex justify-center items-center`, pero vas a repetirlo igualmente por todo tu código.
  
  4. La aparente simplificación no es tal, ya que al separar el código CSS a su propio archivo, el editor de texto sabe que solo pulsando
  "jus" y pulsando el tabulador, él debe escribir `justify-content: ;` y solo con "cen" y tabulador, obtienes `center`.

  5. Se introduce un nuevo nivel de complejidad nada despreciable, pues ahora no sólo debes conocer a fondo CSS 
  y su funcionamiento demencial, también debes conocer la nueva sintaxis introducida por la herramienta (Tailwind en este caso).
  Esto, por supuesto, es una fuente interminable de dolores de cabeza. 
  
  Por ejemplo, en mis primeros y muy reticentes pasos para aprender 
  dicho funcionamiento, he sido incapaz de conseguir que la clase `justify-center` funcione, tras más de una hora de búsqueda en la extensa
  documentación. Estoy seguro de que existe alguna forma de conseguir que esa clase funcione como se espera, pero ni quiero ni necesito 
  saberlo. Y no lo necesito porque sé CSS.

  6. En línea con el punto anterior, esta herramienta no te evita tener que aprender CSS, es evidente que está enfocada a profesionales.
  Más aún, un novato tendría mucho más difícil resolver los problemas que le surjan de su código CSS, porque para poder realizar una 
  búsqueda efectiva en internet, deberá primero traducir sus clases de Tailwind a CSS normal y corriente. 
  
  De hecho, parece muy probable
  que el uso de esta herramienta implica mantener siempre abierta una pestaña del navegador con la única finalidad de traducir de CSS a
  tailwind, para cualquier desarrollador salvo los que la han construido.

  7. No necesitas un archivo .css (.sass, .scss), pero ahora tus archivos .html (.jsx) contienen más código, con toda la
  lógica de presentación y estilo incorporada. Cuando toda la industria aboga por repartir el código en diferentes archivos y componentes
  para facilitar la escritura, lectura y mantenimiento del código, no tiene sentido ir en dirección contraria y fusionar HTML y CSS en el
  mismo documento.

  8. Ahora el CSS lo escribes en horizontal (más aún, en una única `string`) en vez de escribirlo en vertical. Esto produce líneas muy 
  largas que se salen de la pantalla, y ya desde la invención de los periódicos, sabemos que es preferible texto en columna.
  Todo el asunto de "responsive web design" gira en torno a no forzar desplazamientos en horizontal, y limitar el contenido a columnas.
  De hecho, incluso en una pantalla ancha, es preferible limitar la longitud de las líneas de texto, porque es más fácil de leer.
  Esos mismos principios se aplican a la lectura de código.

  9. El hecho de escribir CSS en una string es, en sí mismo, un problema.

  10. Líneas como `class="f6 br3 ph3 pv2 white bg-purple hover-bg-light-purple"` solo sirven para conseguir un CSS absolutamente
  críptico y difícil de leer y modificar. No queremos lenguajes crípticos, queremos lenguajes ricos y expresivos. Si quisiésemos
  programar con lenguajes crípticos, usaríamos los lenguajes de programación que se usan 
  para el [code golf](https://codegolf.stackexchange.com/)

  11. Cerca del final de su artículo, el autor de la herramienta introduce dos nuevos conceptos clave:

  - "Every line of new CSS is still an opportunity for new complexity". Cierto, muy cierto... ¡Ah! eso también ocurre con
  HTML... ¡y con javascript también! Llegados a este punto, es evidente que la solución es no escribir ni una línea de HTML, CSS o JS y 
  cambiar de profesión.

  - "Enforced consistency", donde el autor afirma que esta librería ayuda a limitar la cantidad de colores o tamaños de fuente distintos
  que conviven en tu aplicación web. Para rebatirlo, usaré los dos siguientes puntos.

  12. Es totalmente falso que escribir `text-2xl` en lugar de `font-size: 1.5rem;` ayude a limitar la cantidad de tamaños de fuente. 
  Cuando yo quiera asignar un tamaño de fuente en algún nuevo elemento, y no quiera que sea el mismo que ya usé en el pasado, no me queda
  más remedio que buscar en mi código ese tamaño de fuente para saber cual usé anteriormente. Que la sintaxis sea distinta no me evita 
  tener que rebuscar el código que ya escribí.

  13. Este punto es más personal. El autor de Tailwind CSS expone algunos datos en su artículo, por ejemplo: 
  "GitLab: 402 text colors, 239 background colors, 59 font sizes". Esto, para el autor, es un problema que se debe evitar, y que se
  evade completamente usando su herramienta. En el punto anterior he explicado que esto es falso. 
  Pero, además, es que yo quiero 402 colores en mis páginas web. Quiero degradados de colores (`linear-gradient`) que atraviesen siete colores distintos. Quiero usar en una misma vista diez fuentes distintas (`font-family`). Quiero 239 colores de fondo en 239 vistas, y otras 239 vistas con coloridos mosaicos con `background-repeat: repeat;`.

  14. El autor, después del monstruoso esfuerzo que, estoy seguro, habrá requerido el desarrollar esta herramienta, nos provee
  de unos "templates" ya programados para nuestro disfrute. Por el módico precio de 249€ (+ taxes) para individuos, o 749€ (+ taxes) 
  para equipos. Desde luego, es muy razonable que quiera cobrar por su trabajo. Pero, desde mi punto de vista, no es razonable usar esta
  herramienta (ni regalada).


## Desenlace:

Yo mismo intenté, hace años, escribir unas clases de CSS auxiliares para mi uso personal, cosas como:

```
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
``` 
Pero desistí pocos días después de comenzar, al ir entendiendo algunos de los puntos reflejados anteriormente, 
especialmente el punto (3) sobre la repetición. Dicho intento, por cierto, fue con [Haskell Clay](http://fvisser.nl/clay/) pero
prefiero no hablar del tema.

Me niego a utilizar herramientas como Tailwind CSS o, más en general, a escribir lo que él llama "functional CSS". No me niego porque
tenga la mente cerrada a nuevas tecnologías, o porque no quiera aprender. No me niego por tener envidia de esta persona que ha 
llevado a cabo un enorme esfuerzo y quiere venderlo. No me niego por ser un fanático incapaz de cambiar mi punto de vista.

Me niego porque yo ya pasé por ahí hace años, y conozco de primera mano la incoherencia que resulta de todo esto. Y tengo un grupito 
de neuronas en el cerebro que se amotinan en mi contra cada vez que pretendo introducirme en los terrenos del absurdo y la incoherencia.
De hecho, no es que no quiera usar Tailwind CSS, es que me es físicamente imposible porque la configuración de impulsos eléctricos de
mi sistema nervioso no me lo permite.

Resumiendo, antes que utilizar Tailwind CSS, le prendo fuego a mi ordenador, a mi casa, a la sede de Tailwind y a la sede del W3C.

Gracias por su atención.



# Estudio Cactus Fullstack Test

This is a test to validate the knowledge of the candidates for the position of fullstack developer at Estudio Cactus

## Stack

- React
- NextJS
- Firebase
- Tailwindcss

## Description

In this case the test consists of creating a 3d room configurator. In the following link you can see an example of how the configurator should look like: https://app.estudiocactus.com/visualizer.mp4

Following you have a detailed layout of the data needed to pass the test:

Base image url: https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554

Coordinates to draw the points over the base image:

```
.
└── firestore(/)
    └── points (collection)
```

List of all materials (TIP: You have to think about the right query to get all the materials for a specific point -> Firestore allows array-contains queries)

```
.
└── firestore(/)
    └── materials (collection)
```

The credentials for the Firebase connection are located at

```
.
└── firebase
    └── config
```

## Requirements

1. Use StandardJS as a linter
2. Code should be completely in english ( filenames, variables)

## How to start?

1. Create a new repo using this one as a base(without forking)
2. Make at least 1 first commit with the original code, to see the init hour.
3. Make individiual commits for each block you create. The last commit marks the end.
4. Send us a link to your repo.
5. Deploy your repo to vercel.
6. Send us a link to the deployed project.

## What we value?

- Simplicity of the solution
- Organization and clean code
- Utilization of components
- Mobile first & RWD
- Git usage
- Web Performance Optimization
- Technical knowledge
- Layout knowledge (HTML5 y CSS3)



