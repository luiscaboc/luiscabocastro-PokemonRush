import { Actor } from './Actor';

export class FPSViewer extends Actor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = '25px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
  }
}

// export class BayaCounter extends Actor {
//   draw(delta: number, ctx: CanvasRenderingContext2D) {
//     const bayero = "0/5";
//     ctx.font = '25px Arial';
//     ctx.fillStyle = 'white';
//     ctx.fillText(`Bayas: ${bayero}`, this.position.x, this.position.y);
//   }
// }