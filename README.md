![avatar](https://img.shields.io/badge/building-proccessing-yellow)
![avatar](https://img.shields.io/badge/NPM-8.10.0-blue)
![avatar](https://img.shields.io/badge/Vite-2.9.9-blue)

<p align="center">
    <img src="./src/assets/PokemonTitle.png" width="500"/>
</p>


<p align="center">
    <img src="https://media1.giphy.com/media/yN8PgNoECUwPqSg4Sz/giphy.gif?cid=790b7611d16e64744ab5bfdefc94a404952fc750fd1cb0d2&rid=giphy.gif&ct=g" width="500"/>
</p>


---

[Let's Play!](https://luiscaboc.github.io/luiscabocastro-PokemonRush/)


# Index

1. [Descripción del juego](#descripción-del-juego)
   1. Objetivo del juego
   2. Información del juego
   3. Instrucciones
2. [Tecnologías empleadas](#tecnologias-empleadas)
3. [Proyecto y motivación](#proyecto-y-motivación)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Ejemplos de código](#ejemplos-de-código)
6. [Instalación](#manual-de-instalación)
7. [Agradecimientos](#agradecimientos)
8. [Licencias](#licencias)

# Descripción del juego


>

Primer proyecto de juego en 2D realizado en CORE Code School. El juego está basado en el mundo Pokemon, con un estilo retro al más puro estilo de la GameBoy Advance, para los más nostalgicos.

## Objetivo del juego:

>

LLeva a Pikachu y muevete a través de un arduo camino lleno de peligros, esquivando obstaculos y cualquier contacto con los ekans hasta llegar al podium de la victoria, pero antes tendrás que recoger las bayas que están desperdigadas por el mapa, ¡Hazte con todas!.

## Información del juego:

>

- Mapa 🗺️
  >

El mapa está formado por una serie de 7 caminos infestado de Ekans. Los caminos se iran uniendo a medida que avanza en el mapa y se acerca el final.
El mapa está delimitado por vallas, árboles y casas, entre otros.
Al llegar al último camino después de cruzar el puente y con todas las bayas llevadas contigo, tendrás que subirte en el podio de la victoria para ganar el juego.

- Bayas 🍎

  > 
Las bayas pueden aparecer en tu camino, no las ignores. Recoge tantas como haya en el mapa y consigue todas las que se muestren en el marcador. Una vez conseguidas todas las bayas, tendrás que subirte en el podio de la victoria y así poder ganar el juego.

- Pikachu ⚡

  > 
No dejes que los ekans te muerdan. Mantén todas tus bayas a salvo de los ekans sin que te toquen, sino volverás a la posición inicial donde empezaste y tendrás que volver a recolectar todas las bayas.

- Ekans 🐍
  >

Alejate de estos pokemons ya que toparte con ellos será tu perdición. Estos ekans estarán distribuidos en grupo por cada uno de los caminos del mapa para impedirte que ganes el juego. Una vez te toque un ekans tendrás que volver a empezar desde tu posición inicial. Si llevas bayas contigo... ¡Mala suerte!, volverás sin ninguna de tus bayas.

## Instrucciones

>

| Movimiento | Pikachu |
| ---------- | ------- | 
| Subir      | ⬆️      |
| Derecha    | ➡️      |     
| Bajar      | ⬇️      |
| Izquierda  | ⬅️      |     

# Tecnologias empleadas

- Node
- Vite 
- Javascript 
- Typescript 
- HTML 
- CSS 

# Proyecto y Motivación

Este proyecto nace inspirado en el universo Pokemon mezclado con un juego clásico al que todos hemos jugado alguna vez como el Frogger. El proyecto como parte de mi formación, no sólo ha supuesto un reto para mí, sino que siempre quise probar la experiencia de crear un juego en 2D. Realizar este juego ha sido un desafío hacia todo lo que sé en programación y a veces a llegado a ser frustrante.

## Tareas por finalizar

El proyecto está en proceso de completar las últimas funcionalidades, ya que 2 semanas han sido fugaces para desarrollar un juego por primera vez y en typescript.

A completar:

- [ ] Contador de bayas
- [ ] Alert juego completado
- [ ] Delimitar obstaculos del mapa
- [ ] Pikachu en posición inicial cuando colisiona con Ekans


# Estructura del proyecto

```
├───📁 docs/
├───📁 public/
│   └───📄 style.css
├───📁 src/
│   ├───📁 actors/
│   │   ├───📄 Actor.ts
│   │   ├───📄 Background.ts
│   │   ├───📄 Bayas.ts
│   │   ├───📄 Ekans.ts
│   │   ├───📄 FPSViewer.ts
│   │   ├───📄 ObstaculoBaya.ts
│   │   └───📄 Pikachu.ts
│   ├───📁 assets/
│   │   ├───📁 bayas/
│   │   ├───📄 ekansSprites.png
│   │   ├───📄 fondoPokemon.png
│   │   ├───📄 mapadefinitivo.png
│   │   ├───📄 MapaJuegoPokemon.png
│   │   ├───📄 pikasprites.png
│   │   ├───📄 pokemon-opening.mp3
│   │   └───📄 PokemonTitle.png
│   ├───📁 types/
│   │   └───📄 Point.ts
│   ├───📁 utils/
│   │   └───📄 KeyboardMap.ts
│   └───📄 script.ts
├───📄 .gitignore
├───📄 index.d.ts
├───📄 index.html
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
├───📄 tsconfig.json
└───📄 tsconfig.tsbuildinfo

```


# Ejemplos de código

- Sprite Pikachu

```ts


export class Pikachu extends Actor {
   pikachuSize: number;
   maxSpeed: number;
   speed: Point;
   imagePika: HTMLImageElement;
   sxParameters: number[];
   syParameters: number[];
   timer: number;
   xFrame: number;
   yFrame: number;

   constructor(initialPos: Point, maxSpeed = 0) {
     super(initialPos);
     this.pikachuSize = 52;
     this.maxSpeed = maxSpeed;
     this.speed = { x: maxSpeed, y: 0 };
     this.imagePika = new Image();
     this.imagePika.src = imagePika;
     this.sxParameters = [0, 1, 2];
     this.syParameters = [0, 1, 2, 3, 4];
     this.timer = 0;
     this.xFrame = 0;
     this.yFrame = 0;
   }

     ctx.drawImage(
       this.imagePika,
       30 * this.sxParameters[this.xFrame],
       36 * this.syParameters[this.yFrame],
       30,
       36,
       - this.pikachuSize /2,
       - this.pikachuSize /2,
       this.pikachuSize,
       this.pikachuSize
     );
   }

```

## Uso de sprites para la representación del juego:

- Sprites de actores principales:

| Pikachu                                 | Ekans                                    |
| --------------------------------------- | ---------------------------------------- |
| ![avatar](./src/assets/pikasprites.png) | ![avatar](./src/assets/ekansSprites.png) |

## Mapa


![avatar](./src/assets/MapaJuegoPokemon.png)


# Manual de Instalación

## Instalación

Para descargarnos el juego, instalarlo, debemos ejecutar los siguientes comandos.

- Clonamos el repositorio

```
 git clone git@github.com:luiscaboc/luiscabocastro-PokemonRush.git

```

- Nos situamos en la carpeta

```
 cd luiscabocastro-PokemonRush
```

- Instalamos las dependencias

```
 npm install
```

## Ejecución

- Comando para ejecutar el juego en modo desarrollo

```
 npm run dev
```

- Comando para ejecutar el juego en modo producción

```
 npm run start
```

## Building

- Comando para compilar el juego

```
 npm run ghbuild
```

# Agradecimientos

Quiero dar las gracias a [Luis Miguel Feijoo](https://github.com/luismiguelfeijoo) por toda la ayuda brindada en estas semanas tan duras y estar disponible para cualquier duda. Tampoco hubiera sido posible sin el apoyo de mis compañeros que ha hecho que los momentos mas frustrantes se volvieran más amenos.


# Licencias

[MIT](https://choosealicense.com/licenses/mit/)








