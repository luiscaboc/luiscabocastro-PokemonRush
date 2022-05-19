import { Actor } from './Actor';
import { Point } from '../types/Point';
// import { converAngleToRad } from '../utils/angleToRad';
import imagePika from "../assets/pikasprites.png";

export class Pikachu extends Actor {
   pikachuSize: number;
   pikachuMove: number;
   origin: Point;
   maxSpeed: number;
   speed: Point;
 

   // IMAGES
   //image: HTMLImageElement;
   imagePika: HTMLImageElement;
   sxParameters: number[];
   syParameters: number[];
   timer: number;
   xFrame: number;
   yFrame: number;

   constructor(initialPos: Point, maxSpeed = 180) {
     super(initialPos);
     this.pikachuSize = 52;
     this.pikachuMove = 30;
     this.origin = { x: initialPos.x, y: initialPos.y };
     this.maxSpeed = maxSpeed;
     this.speed = { x: maxSpeed, y: 0 };
     this.imagePika = new Image();
     this.imagePika.src = imagePika;
     this.sxParameters = [0, 1, 2, 3, 0];
     this.syParameters = [0, 1, 2, 3, 0];
     this.timer = 0;
     this.xFrame = 0;
     this.yFrame = 0;
   }

   // add delta to update
   update(delta: number) {
     this.pikachuMove += 0.8;
     // speed * delta
     let newPosX = this.origin.x + this.speed.x * delta;
     if (newPosX <= 1140 - this.pikachuSize/2  && newPosX >= this.pikachuSize/2) {
       this.origin.x = newPosX;
     }
     let newPosY = this.origin.y + this.speed.y * delta;
     if (newPosY <= 1380 - this.pikachuSize/2  && newPosY >= this.pikachuSize/2) {
       this.origin.y = newPosY;
     };

     this.timer += delta;

     if (this.timer >= 0.08) {
       this.xFrame = (this.xFrame + 1) % 3; //estaba antes a 6
       //this.yFrame = (this.yFrame + 1) % 3; // la he añadido yo ERROR FATAL
       this.timer = 0;
     }
   }

   //add delta to draw
   draw(delta: number, ctx: CanvasRenderingContext2D) {
     let origin = this.origin;

     let directionX = 0;
     if (this.speed.x != 0 && this.speed.x < 0) {
       directionX = 180;
     }
     
      let directionY = 0;
      if (this.speed.y != 0 && this.speed.y < 0) {
        directionY = 180;
      }


     ctx.translate(origin.x, origin.y);
     // Remember to paint a rectangle behind to configure your image
     //ctx.fillRect(0, 0, this.pikachuSize, this.pikachuSize); //medidas donde empieza pikachu
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

   keyboard_event_down(key: string) {
     switch (key) {
       case 'ArrowRight':
         console.log('right');
         this.speed.y = 0;
         this.speed.x = this.maxSpeed;
         this.xFrame = 2;
         break;
       case 'ArrowLeft':
         console.log('left');
         this.speed.y = 0;
         this.speed.x = -this.maxSpeed;
         this.xFrame = 1;
         break;
       case 'ArrowUp':
         console.log('up');
         this.speed.x = 0;
         this.speed.y = -this.maxSpeed;
         this.yFrame = 0;
         break;
       case 'ArrowDown':
         console.log('down');
         this.speed.x = 0;
         this.speed.y = this.maxSpeed;
         this.yFrame = 0;
         break;
       default:
         console.log('not a valid key');
         break;
     }
   }
 }