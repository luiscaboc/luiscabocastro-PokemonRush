import { Map } from './actors/Map';
import { FPSViewer } from './actors/FPSViewer';
import { Actor } from './actors/Actor';
import { Car } from './actors/Car';
import { Barrier } from './actors/Barrier';
import { MAP_A, MAP_B } from './utils/KeyboardMap';
import { Circuit, createCircuit } from './state/CircuitManager';
import { Background } from "./actors/Background";
import { Pikachu } from "./actors/Pikachu";
import { Ekans } from "./actors/Ekans";
import { BayaFrambu , BayaMeloc , BayaOram , BayaSafre , BayaZanama } from "./actors/Bayas";
//import { Comida } from "./actors/ObstaculoBaya" ERROR


window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  let carA = new Car({ x: 200, y: 200 }, MAP_A);
  //let carB = new Car({ x: 300, y: 200 }, MAP_B);

  createCircuit(carA);
  let barriers: Barrier[] = [...Circuit.barriers];
  let cars: Car[] = [carA]; //, carB];

  //let totalBayas: Comida[] = circuitBayas(Pikachu); ERROR

  let ekansActors: Actor[] = [
    new Ekans({x:10 , y:630}),
    new Ekans({x:10 , y:690}),
    new Ekans({x:10 , y:270}),
    new Ekans({x:10 , y:390}),
    new Ekans({x:10 , y:330}),
    new Ekans({x:10 , y:930}),
    new Ekans({x:10 , y:1110}),]

  let actors: Actor[] = [
    new Background({x: 0, y: 0}),
    new FPSViewer({ x: 200, y: 530 }),
    //...cars,
    //...barriers,
    //...totalBayas,
    Circuit,
    ... ekansActors,

    // new Ekans({x:1100 , y:630}),
    // new Ekans({x:0 , y:690}),
    // new Ekans({x:0 , y:270}),
    // new Ekans({x:0 , y:390}),
    // new Ekans({x:0 , y:330}),
    // new Ekans({x:0 , y:930}),
    // new Ekans({x:0 , y:1110}),
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