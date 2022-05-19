import { Point } from '../types/Point';
import {
  BayaFrambu,
  BayaMeloc,
  BayaOram,
  BayaSafre,
  BayaZanama,
} from './Bayas';
import { Pikachu } from './Pikachu';

export class Comida extends BayaFrambu {
  bayaFrambuSize: number;
  actor: Pikachu;
  touched: boolean;

  constructor(initialPos: Point, bfs = 100, actor: Pikachu) {
    super(initialPos);
    this.bayaFrambuSize = bfs;
    this.actor = actor;
    this.touched = true;
  }
  update(delta: number): void {
    let actorPos = this.actor.position;
    let bayaPos = this.position;
    let distance = Math.sqrt(
      Math.pow(bayaPos.x - actorPos.x, 2) + Math.pow(bayaPos.y - actorPos.y, 2)
    );

    if (distance < 50) {
      this.touched = false;
      //Comida.destroy()
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    ctx.drawImage(
      this.imageBayaFrambu,
      23,
      23,
      80,
      90,
      0,
      0,
      this.bayaFrambuSize,
      this.bayaFrambuSize
    );
  }
}

 export const circuitBayas = (actor: Pikachu) => {
   let totalbayas: Comida[] = [];
   let num = 5;

   for (let i = 0; i < num; i++) {
     totalbayas.push(
       new Comida({ x: 300, y: 300 }, 100, actor),
       new Comida({ x: 400, y: 300 }, 100, actor),
       new Comida({ x: 500, y: 300 }, 100, actor),
       new Comida({ x: 600, y: 300 }, 100, actor),
       new Comida({ x: 200, y: 300 }, 100, actor)
     );
   }

   return totalbayas;
 };
