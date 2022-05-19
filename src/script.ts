import { FPSViewer } from './actors/FPSViewer';
import { Actor } from './actors/Actor';
import { Background } from "./actors/Background";
import { Pikachu } from "./actors/Pikachu";
import { Ekans } from "./actors/Ekans";
import { BayaFrambu , BayaMeloc , BayaOram , BayaSafre , BayaZanama } from "./actors/Bayas";
import { circuitBayas, Comida } from "./actors/ObstaculoBaya" ;
import { BayaCounter } from './actors/FPSViewer';




window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  //let carB = new Car({ x: 300, y: 200 }, MAP_B);


  let bayas: Comida[] = []

  //let barriers: Barrier[] = [...Mapa.barriers]; ERROR

  //let totalBayas: Comida[] = circuitBayas(Pikachu); 

  //let totalBayas: Comida[] = [...circuitBayas.totalBayas]


// let bayasActors: Comida[] = [
//   new Comida({ x: 300, y: 300 }, 100, actor),
//   new Comida({ x: 400, y: 300 }, 100, actor),
//   new Comida({ x: 500, y: 300 }, 100, actor),
//   new Comida({ x: 600, y: 300 }, 100, actor),
//   new Comida({ x: 200, y: 300 }, 100, actor)
// ]


  let ekansActors: Actor[] = [

    //puente 2
    new Ekans({x:0 , y:630}),
    new Ekans({x:900 , y:630}),
    new Ekans({x:550 , y:630}),
    new Ekans({x:250 , y:630}),

    new Ekans({x:0 , y:690}),
    new Ekans({x:800 , y:690}),
    new Ekans({x:650 , y:690}),
    new Ekans({x:300 , y:690}),

    new Ekans({x:900 , y:270}),
    new Ekans({x:400 , y:270}),
    new Ekans({x:300 , y:270}),


//parte final pero camino medio
new Ekans({x:200 , y:330}),
new Ekans({x:679 , y:330}),
new Ekans({x:1000 , y:330}),

    new Ekans({x:100 , y:390}),
    new Ekans({x:578 , y:390}),
    new Ekans({x:350 , y:390}),


    //2
    new Ekans({x:0 , y:930}),
    new Ekans({x:900 , y:930}),
    new Ekans({x:550 , y:930}),
    new Ekans({x:250 , y:930}),

    //1
    new Ekans({x:0 , y:1110}),
    new Ekans({x:700 , y:1110}),
    new Ekans({x:450 , y:1110}),
    new Ekans({x:200 , y:1110}),]

  let actors: Actor[] = [
    new Background({x: 0, y: 0}),
    new FPSViewer({ x: 300, y: 530 }),
    new BayaCounter({ x: 700, y: 530 }),
    //...cars,
    //...barriers,
    //...totalBayas,
    ... ekansActors,
    new Pikachu({x:550, y: 1300}),
    new BayaFrambu({x: 500, y:1025}),
    new BayaMeloc({x: 195, y:800}),
    new BayaOram({x:322 , y:150}),
    new BayaSafre({x: 920, y:440}),
    new BayaZanama({x: 950, y:920})
  ];



  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => {
      e.update(delta);
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
      ctx.save();
      e.draw(delta, ctx);
      ctx.restore();
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener('keydown', (e) => {
    // console.log('Keydown', e);
    actors.forEach((actor) => {
      actor.keyboard_event_down(e.key);
    });
  });


  document.body.addEventListener('keyup', (e) => {
    // console.log('keyUp', e);
    actors.forEach((actor) => {
      actor.keyboard_event_up(e.key);
    });
  });
};