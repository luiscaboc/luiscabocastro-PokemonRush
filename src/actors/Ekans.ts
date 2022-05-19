import { Actor } from './Actor';
import { Point } from '../types/Point';
import imageEkans from "../assets/ekansSprites.png";

export class Ekans extends Actor {
   ekansSize: number;
   ekansMove: number;
   origin: Point;
   maxSpeed: number;
   speed: Point;
 

   // IMAGES
   imageEkans: HTMLImageElement;
   sxParameters: number[];
   timer: number;
   xFrame: number;


   constructor(initialPos: Point, maxSpeed = -200) {
     super(initialPos);
     this.ekansSize = 65;
     this.ekansMove = 30;
     this.origin = { x: initialPos.x, y: initialPos.y };
     this.maxSpeed = maxSpeed;
     this.speed = { x: maxSpeed, y: 0 };
     this.imageEkans = new Image();
     this.imageEkans.src = imageEkans;
     this.sxParameters = [0, 1, 2, 0];
     this.timer = 0;
     this.xFrame = 0;
   }

   // add delta to update
    update(delta: number) {
      this.ekansMove += 0.8;
      // speed * delta
      let newPosX = this.origin.x + this.speed.x * delta;

      
      // if (newPosX <= 1140 - this.ekansSize/2 && newPosX >= this.ekansSize/2) {
      //   this.origin.x = newPosX;
      
      // if (this.origin.x > 1144 + this.ekansSize){
      //   this.origin.x = 0 - this.ekansSize;
      // }
      // }
        this.origin.x = newPosX;
        if (this.origin.x < 0) {
          this.origin.x = 1200;
        }

      this.timer += delta;

      if (this.timer >= 0.1) {
        this.xFrame = (this.xFrame + 1) % 3; //estaba antes a 6
        this.timer = 0;
      }
    }
      //this.origin.x = (this.origin.x + this.speed) % 500;



   //add delta to draw
    draw(delta: number, ctx: CanvasRenderingContext2D) {
      let origin = this.origin;

      let direction = 0;
      if (this.speed.x != 0 && this.speed.x < 0) {
        direction = 180;
      }
      ctx.translate(origin.x, origin.y);
     // Remember to paint a rectangle behind to configure your image
     //ctx.fillRect(0, 0, this.ekansSize, this.ekansSize); //medidas donde empieza pikachu
     ctx.drawImage(
       this.imageEkans,
       50 * this.sxParameters[this.xFrame],
       0,
       50,
       50,
       - this.ekansSize /2,
       - this.ekansSize /2,
       this.ekansSize,
       this.ekansSize
     );
   }
  }

  // function initObstacles() {
  //   let ekansArray = [];
  //   for (let i = 0; i < 2; i++) {
  //     let x = i * 300;
  //     ekansArray.push(new Ekans(873875893, -200))
  //   }
  // }




