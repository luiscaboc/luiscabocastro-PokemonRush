import { Point } from '../types/Point';
import imageBayaMeloc from '../assets/bayas/Baya_Meloc.png';
import imageBayaOram from '../assets/bayas/Baya_Oram.png';
import imageBayaSafre from '../assets/bayas/Baya_Safre.png';
import imageBayaZanama from '../assets/bayas/Baya_Frambu.png';
import { Actor } from './Actor';
import { Pikachu } from './Pikachu';

export class Baya extends Actor {
  bayaSize: number;
  actor: Pikachu;
  touched: boolean;
  imageBaya: HTMLImageElement;

  constructor(
    bayaSize: number,
    initialPos: Point,
    imageBaya: any,
    actor: Pikachu
  ) {
    super(initialPos);
    this.touched = false;
    this.actor = actor;
    this.bayaSize = bayaSize;
    this.imageBaya = new Image();
    this.imageBaya.src = imageBaya;
  }

  update(delta: number): void {
    let actorPos = this.actor.position;
    let bayaPos = this.position;
    let distance = Math.sqrt(
      Math.pow(bayaPos.x - actorPos.x, 2) + Math.pow(bayaPos.y - actorPos.y, 2)
    );

    if (distance < this.bayaSize) {
      this.touched = true;
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.position;
    ctx.translate(origin.x, origin.y);

    if (!this.touched) {
      ctx.drawImage(
        this.imageBaya,
        23,
        23,
        80,
        90,
        0,
        0,
        this.bayaSize,
        this.bayaSize
      );
    }
  }
}

export class Baya_Meloc extends Baya {
  constructor(initialPos: Point, actor: Pikachu) {
    super(28, initialPos, imageBayaMeloc, actor);
  }
}

export class Baya_Oram extends Baya {
  constructor(initialPos: Point, actor: Pikachu) {
    super(28, initialPos, imageBayaOram, actor);
  }
}

export class Baya_Safre extends Baya {
  constructor(initialPos: Point, actor: Pikachu) {
    super(28, initialPos, imageBayaSafre, actor);
  }
}

export class Baya_Zanama extends Baya {
  constructor(initialPos: Point, actor: Pikachu) {
    super(28, initialPos, imageBayaZanama, actor);
  }
}
