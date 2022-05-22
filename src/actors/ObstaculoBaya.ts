// import { Point } from '../types/Point';
// import {
//   BayaFrambu,
//   BayaMeloc,
//   BayaOram,
//   BayaSafre,
//   BayaZanama,
// } from './Bayas';
// import { Pikachu } from './Pikachu';

// export class Comida extends BayaFrambu {
//   bayaFrambuSize: number;
//   actor: Pikachu;
//   touched: boolean;

//   constructor(initialPos: Point, bfs = 100, actor: Pikachu) {
//     super(initialPos);
//     this.bayaFrambuSize = bfs;
//     this.actor = actor;
//     this.touched = true;
//   }
//   update(delta: number): void {
//     let actorPos = this.actor.position;
//     let bayaPos = this.position;
//     let distance = Math.sqrt(
//       Math.pow(bayaPos.x - actorPos.x, 2) + Math.pow(bayaPos.y - actorPos.y, 2)
//     );

//     if (distance < 50) {
//       this.touched = false;
//       //Comida.destroy()
//     }
//   }

//   draw(delta: number, ctx: CanvasRenderingContext2D): void {
//     ctx.translate(this.position.x, this.position.y);
//     ctx.drawImage(
//       this.imageBayaFrambu,
//       23,
//       23,
//       80,
//       90,
//       0,
//       0,
//       this.bayaFrambuSize,
//       this.bayaFrambuSize
//     );
//   }
// }

//  export const circuitBayas = (actor: Pikachu) => {
//    let totalbayas: Comida[] = [];
//    let num = 5;

//    for (let i = 0; i < num; i++) {
//      totalbayas.push(
//        new Comida({ x: 300, y: 300 }, 100, actor),
//        new Comida({ x: 400, y: 300 }, 100, actor),
//        new Comida({ x: 500, y: 300 }, 100, actor),
//        new Comida({ x: 600, y: 300 }, 100, actor),
//        new Comida({ x: 200, y: 300 }, 100, actor)
//      );
//    }

//    return totalbayas;
//  };




// import { Point } from '../types/Point';
// import { Actor } from './Actor';
// import image from '../assets/point.png';

// export class GamePoint extends Actor {
//     pointSize: number;
//     touched: boolean;
//     pointImage: HTMLImageElement;
//     ball: Actor;

//     //FIXME:
//     constructor(initialPos: Point, ball: Actor, pointSize = 25) {
//         super(initialPos);
//         this.pointSize = pointSize;
//         this.ball = ball;
//         this.touched = false;
//         this.pointImage = new Image();
//         this.pointImage.src = image;
//     }

//     update(delta: number): void {
//         let ballPos = this.ball.position; //pikachuPos
//         let pointPos = this.position; //bayaPos
//         //console.log(ballPos, pointPos);

//         //FIXME:
//         let ballDistance = Math.sqrt(Math.pow(pointPos.x - ballPos.x, 2) + Math.pow(pointPos.y - ballPos.y, 2)); //pikachu

//         //FIXME:
//         if (ballDistance < this.pointSize / 2) {
//             this.touched = true;
//         }
//         //console.log('BALL DISTANCE --->', ballDistance, 'TOUCHED --->', this.touched);
//     }

//     draw(delta: number, ctx: CanvasRenderingContext2D): void {
//         ctx.translate(this.position.x, this.position.y);
//         ctx.drawImage(this.pointImage, -this.pointSize / 2, -this.pointSize / 2, this.pointSize, this.pointSize);
//     }
// }