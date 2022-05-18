import { Actor } from './Actor';
import { Point } from '../types/Point';
// import { converAngleToRad } from '../utils/angleToRad';
import imageBayaFrambu from "../assets/bayas/Baya_Frambu.png";
import imageBayaMeloc from "../assets/bayas/Baya_Meloc.png";
import imageBayaOram from "../assets/bayas/Baya_Oram.png";
import imageBayaSafre from "../assets/bayas/Baya_Safre.png";
import imageBayaZanama from "../assets/bayas/Baya_Zanama.png";
import { Pikachu } from './Pikachu';
import { getMaxListeners } from 'process';


export class BayaFrambu extends Actor {
   bayaFrambuSize: number;
   origin: Point;
 
   // IMAGES
   imageBayaFrambu: HTMLImageElement;

   constructor(initialPos: Point) {
     super(initialPos);
     this.bayaFrambuSize = 28;
     this.origin = { x: initialPos.x, y: initialPos.y };
     this.imageBayaFrambu = new Image();
     this.imageBayaFrambu.src = imageBayaFrambu;
   }

   //add delta to draw
   draw(delta: number, ctx: CanvasRenderingContext2D) {
     let origin = this.origin;
     ctx.translate(origin.x, origin.y);
     // Remember to paint a rectangle behind to configure your image
     //ctx.fillRect(0, 0, this.bayaFrambuSize, this.bayaFrambuSize); //medidas donde empieza pikachu
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

 export class BayaMeloc extends Actor {
    bayaMelocSize: number;
    origin: Point;
  
    // IMAGES
    imageBayaMeloc: HTMLImageElement;
 
    constructor(initialPos: Point) {
      super(initialPos);
      this.bayaMelocSize = 28;
      this.origin = { x: initialPos.x, y: initialPos.y };
      this.imageBayaMeloc = new Image();
      this.imageBayaMeloc.src = imageBayaMeloc;
    }
 
    //add delta to draw
    draw(delta: number, ctx: CanvasRenderingContext2D) {
      let origin = this.origin;
      ctx.translate(origin.x, origin.y);
      // Remember to paint a rectangle behind to configure your image
      //ctx.fillRect(0, 0, this.bayaMelocSize, this.bayaMelocSize); //medidas donde empieza pikachu
      ctx.drawImage(
        this.imageBayaMeloc,
        23,
        23,
        80,
        90,
        0,
        0,
        this.bayaMelocSize,
        this.bayaMelocSize
      );
    }
  }

  export class BayaOram extends Actor {
    bayaOramSize: number;
    origin: Point;
  
    // IMAGES
    imageBayaOram: HTMLImageElement;
 
    constructor(initialPos: Point) {
      super(initialPos);
      this.bayaOramSize = 28;
      this.origin = { x: initialPos.x, y: initialPos.y };
      this.imageBayaOram = new Image();
      this.imageBayaOram.src = imageBayaOram;
    }
 
    //add delta to draw
    draw(delta: number, ctx: CanvasRenderingContext2D) {
      let origin = this.origin;
      ctx.translate(origin.x, origin.y);
      // Remember to paint a rectangle behind to configure your image
      //ctx.fillRect(0, 0, this.bayaOramSize, this.bayaOramSize); //medidas donde empieza pikachu
      ctx.drawImage(
        this.imageBayaOram,
        23,
        23,
        80,
        90,
        0,
        0,
        this.bayaOramSize,
        this.bayaOramSize
      );
    }
  }

  export class BayaSafre extends Actor {
    bayaSafreSize: number;
    origin: Point;
  
    // IMAGES
    imageBayaSafre: HTMLImageElement;
 
    constructor(initialPos: Point) {
      super(initialPos);
      this.bayaSafreSize = 28;
      this.origin = { x: initialPos.x, y: initialPos.y };
      this.imageBayaSafre = new Image();
      this.imageBayaSafre.src = imageBayaSafre;
    }
 
    //add delta to draw
    draw(delta: number, ctx: CanvasRenderingContext2D) {
      let origin = this.origin;
      ctx.translate(origin.x, origin.y);
      // Remember to paint a rectangle behind to configure your image
      //ctx.fillRect(0, 0, this.bayaSafreSize, this.bayaSafreSize); //medidas donde empieza pikachu
      ctx.drawImage(
        this.imageBayaSafre,
        23,
        23,
        80,
        90,
        0,
        0,
        this.bayaSafreSize,
        this.bayaSafreSize
      );
    }
  }

  export class BayaZanama extends Actor {
    bayaZanamaSize: number;
    origin: Point;
  
    // IMAGES
    imageBayaZanama: HTMLImageElement;
 
    constructor(initialPos: Point) {
      super(initialPos);
      this.bayaZanamaSize = 28;
      this.origin = { x: initialPos.x, y: initialPos.y };
      this.imageBayaZanama = new Image();
      this.imageBayaZanama.src = imageBayaZanama;
    }
 
    //add delta to draw
    draw(delta: number, ctx: CanvasRenderingContext2D) {
      let origin = this.origin;
      ctx.translate(origin.x, origin.y);
      // Remember to paint a rectangle behind to configure your image
      //ctx.fillRect(0, 0, this.bayaZanamaSize, this.bayaZanamaSize); //medidas donde empieza pikachu
      ctx.drawImage(
        this.imageBayaZanama,
        23,
        23,
        80,
        90,
        0,
        0,
        this.bayaZanamaSize,
        this.bayaZanamaSize
      );
    }
  }



