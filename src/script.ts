import { FPSViewer } from './actors/FPSViewer';
import { Actor } from './actors/Actor';
import { Background } from './actors/Background';
import { Pikachu } from './actors/Pikachu';
import { Ekans } from './actors/Ekans';
import {
  Baya,
  Baya_Meloc,
  Baya_Oram,
  Baya_Safre,
  Baya_Zanama,
} from './actors/Bayas';
//import { BayaCounter } from './actors/FPSViewer';

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


  let pikachu = new Pikachu({ x: 570, y: 1290 });

  let ekansActors: Actor[] = [
    //puente 2
    new Ekans({ x: 0, y: 630 }, -100, pikachu),
    new Ekans({ x: 900, y: 630 }, -200, pikachu),
    new Ekans({ x: 550, y: 630 }, -200, pikachu),
    new Ekans({ x: 250, y: 630 }, -200, pikachu),

    new Ekans({ x: 0, y: 690 }, -100, pikachu),
    new Ekans({ x: 800, y: 690 }, -100, pikachu),
    new Ekans({ x: 650, y: 690 }, -200, pikachu),
    new Ekans({ x: 300, y: 690 }, -150, pikachu),

    new Ekans({ x: 900, y: 270 }, -200, pikachu),
    new Ekans({ x: 400, y: 270 }, -200, pikachu),
    new Ekans({ x: 300, y: 270 }, -150, pikachu),

    //parte final pero camino medio
    new Ekans({ x: 200, y: 330 }, -200, pikachu),
    new Ekans({ x: 679, y: 330 }, -200, pikachu),
    new Ekans({ x: 1000, y: 330 }, -100, pikachu),

    new Ekans({ x: 100, y: 390 }, -200, pikachu),
    new Ekans({ x: 578, y: 390 }, -100, pikachu),
    new Ekans({ x: 350, y: 390 }, -150, pikachu),

    //2
    new Ekans({ x: 0, y: 930 }, -200, pikachu),
    new Ekans({ x: 900, y: 930 }, -200, pikachu),
    new Ekans({ x: 550, y: 930 }, -100, pikachu),
    new Ekans({ x: 250, y: 930 }, -150, pikachu),

    //1
    new Ekans({ x: 0, y: 1110 }, -200, pikachu),
    new Ekans({ x: 700, y: 1110 }, -100, pikachu),
    new Ekans({ x: 450, y: 1110 }, -150, pikachu),
    new Ekans({ x: 200, y: 1110 }, -200, pikachu),
  ];

  let bayas: Baya[] = [
    new Baya_Meloc({ x: 195, y: 800 }, pikachu),
    new Baya_Oram({ x: 322, y: 150 }, pikachu),
    new Baya_Safre({ x: 920, y: 440 }, pikachu),
    new Baya_Zanama({ x: 950, y: 920 }, pikachu),
    new Baya_Zanama({ x: 520, y: 1020 }, pikachu),
  ];

  let actors: Actor[] = [
    new Background({ x: 0, y: 0 }),
    new FPSViewer({ x: 300, y: 530 }),
    ...bayas,
    ...ekansActors,

    pikachu,
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
