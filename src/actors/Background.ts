import { Actor } from "./Actor";
import { Point } from "../types/Point";
import image from "../assets/MapaJuegoPokemon.png";

interface Size {
  w: number;
  h: number;
}

export class Background extends Actor {
  backgroundImage: HTMLImageElement;
  backgroundSize: Size;

  constructor(
    initialPos: Point,
    size: Size = { w: 1140, h: 1380 }
  ) {
    super(initialPos);
    this.backgroundSize = size;
    this.backgroundImage = new Image();
    this.backgroundImage.src = image;
  }

  draw(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.backgroundImage,
      0,
      0,
      this.backgroundSize.w,
      this.backgroundSize.h
    );
  }
}