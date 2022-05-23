import { Actor } from './Actor';
import { Point } from '../types/Point';
import imageEkans from '../assets/ekansSprites.png';
import { Pikachu } from './Pikachu';

export class Ekans extends Actor {
  ekansSize: number;
  maxSpeed: number;
  speed: Point;
  actor: Pikachu;
  touched: boolean;

  // IMAGES
  imageEkans: HTMLImageElement;
  sxParameters: number[];
  timer: number;
  xFrame: number;

  constructor(initialPos: Point, maxSpeed: number, actor: Pikachu) {
    super(initialPos);
    this.touched = false;
    this.ekansSize = 65;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: 0 };
    this.imageEkans = new Image();
    this.imageEkans.src = imageEkans;
    this.sxParameters = [0, 1, 2, 0];
    this.timer = 0;
    this.xFrame = 0;
    this.actor = actor;
  }

  // add delta to update
  update(delta: number): void {
    let actorPos = this.actor.position;
    let ekansPos = this.position;
    let distance = Math.sqrt(
      Math.pow(ekansPos.x - actorPos.x, 2) +
        Math.pow(ekansPos.y - actorPos.y, 2)
    );
    // speed * delta
    let newPosX = this.position.x + this.speed.x * delta;

    // if (newPosX <= 1140 - this.ekansSize/2 && newPosX >= this.ekansSize/2) {
    //   this.origin.x = newPosX;

    // if (this.origin.x > 1144 + this.ekansSize){
    //   this.origin.x = 0 - this.ekansSize;
    // }
    // }

    if (this.position.x < 0) {
      newPosX = 1200;
    }
    if (distance < this.ekansSize) {
      this.touched = true;

      //console.log(this.touched)
    }

    this.timer += delta;

    if (this.timer >= 0.1) {
      this.xFrame = (this.xFrame + 1) % 3;
      this.timer = 0;
    }
    this.position.x = newPosX;

    //console.log("actor:", actorPos , "baya:", bayaPos);
  }

  //this.origin.x = (this.origin.x + this.speed) % 500;

  //add delta to draw
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.position;

    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }
    ctx.translate(origin.x, origin.y);
    // Remember to paint a rectangle behind to configure your image
    //ctx.fillRect(0, 0, this.ekansSize, this.ekansSize); //medidas donde empieza pikachu

    if (!this.touched) {
      ctx.drawImage(
        this.imageEkans,
        50 * this.sxParameters[this.xFrame],
        0,
        50,
        50,
        -this.ekansSize / 2,
        -this.ekansSize / 2,
        this.ekansSize,
        this.ekansSize
      );
    }
  }
}

//////////////////////////////////HACER LO MISMO Q CON LAS BAYAS EL PIKACHU
// //add delta to draw
// draw(delta: number, ctx: CanvasRenderingContext2D) {
//   let origin = this.position;
//   ctx.translate(origin.x, origin.y);
//   // Remember to paint a rectangle behind to configure your image
//   //ctx.fillRect(0, 0, this.bayaFrambuSize, this.bayaFrambuSize); //medidas donde empieza pikachu

//   if (!this.touched) {
//     ctx.drawImage(
//       this.imageBaya,
//       23,
//       23,
//       80,
//       90,
//       0,
//       0,
//       this.bayaSize,
//       this.bayaSize
//     );
//   }
// }
