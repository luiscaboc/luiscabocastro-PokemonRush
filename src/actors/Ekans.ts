import { Actor } from './Actor';
import { Point } from '../types/Point';
// import { converAngleToRad } from '../utils/angleToRad';
import imageEkans from "../assets/ekansSprites.png";

export class Ekans extends Actor {
   ekansSize: number;
   ekansMove: number;
   origin: Point;
   color: string;
   maxSpeed: number;
   speed: Point;
 

   // IMAGES
   //image: HTMLImageElement;
   imageEkans: HTMLImageElement;
   sxParameters: number[];
   timer: number;
   xFrame: number;
   yFrame: number;
   width: number;
   height: number;

   constructor(initialPos: Point, color = 'yellow', maxSpeed = 100) {
     super(initialPos);
     this.width = 80;
     this.height = 60;
     this.ekansSize = this.width + this.height;
     //this.ekansSize = 60;
     this.ekansMove = 30;
     this.origin = { x: initialPos.x, y: initialPos.y };
     this.color = color;
     this.maxSpeed = maxSpeed;
     this.speed = { x: maxSpeed, y: 0 };
     this.imageEkans = new Image();
     this.imageEkans.src = imageEkans;
     this.sxParameters = [0, 1, 2, 0];
     this.timer = 0;
     this.xFrame = 0;
     this.yFrame = 2;
   }

   // add delta to update
   update(delta: number) {
     this.ekansMove += 0.8;
     // speed * delta
     let newPosX = this.origin.x + this.speed.x * delta;
     if (newPosX <= 1024 - this.ekansSize && newPosX >= this.ekansSize) {
       this.origin.x = newPosX;
     }
     this.timer += delta;

     if (this.timer >= 0.08) {
       this.xFrame = (this.xFrame + 1) % 3; //estaba antes a 6
       this.timer = 0;
     }
   }

   //add delta to draw
   draw(delta: number, ctx: CanvasRenderingContext2D) {
     let origin = this.origin;

     let direction = 0;
     if (this.speed.x != 0 && this.speed.x < 0) {
       direction = 180;
     }
     ctx.translate(origin.x, origin.y);
     // Remember to paint a rectangle behind to configure your image
     ctx.fillRect(0, 0, this.width, this.height); //medidas donde empieza pikachu
     ctx.drawImage(
       this.imageEkans,
       0, // * this.sxParameters[this.xFrame],
       0, // * this.yFrame,
       50,
       50,
       - this.ekansSize /2,
       - this.ekansSize /2,
       this.ekansSize,
       this.ekansSize
     );
   }

  //  keyboard_event_down(key: string) {
  //    switch (key) {
  //      case 'ArrowRight':
  //        console.log('right');
  //        this.speed.x = this.maxSpeed;
  //        this.yFrame = 3;
  //        break;
  //      case 'ArrowLeft':
  //        console.log('left');
  //        this.speed.x = -this.maxSpeed;
  //        this.yFrame = 1;
  //        break;
  //      case 'ArrowUp':
  //        console.log('up');
  //        this.speed.y = this.maxSpeed;
  //        this.xFrame = 3;
  //        break;
  //      case 'ArrowDown':
  //        console.log('down');
  //        this.speed.y = -this.maxSpeed;
  //        this.xFrame = 1;
  //        break;
  //      default:
  //        console.log('not a valid key');
  //        break;
  //    }
  //  }
 }