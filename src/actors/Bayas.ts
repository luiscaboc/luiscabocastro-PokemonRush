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

      //console.log(this.touched)
    }
    //console.log("actor:", actorPos , "baya:", bayaPos);
  }

  //add delta to draw
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.position;
    ctx.translate(origin.x, origin.y);
    // Remember to paint a rectangle behind to configure your image
    //ctx.fillRect(0, 0, this.bayaFrambuSize, this.bayaFrambuSize); //medidas donde empieza pikachu

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

 //////////////// funcionalidad contar bayas
 
// export class RecogerBaya extends Baya {
//   bayas: number;
//   bayasRecogidas: number;
//   initialPos: Point;

//   constructor(
//     initialPos: Point,
//     bayas: number,
//     bayasRecogidas: number,
//     actor: Pikachu
//   ) {
//     super(initialPos, bayas, bayasRecogidas, actor);
//     this.initialPos = this.position;
//     this.bayas = bayas;
//     this.touched = false;
//     this.actor = this.actor;
//     this.imageBaya = new Image();
//     this.bayas = 0;
//     this.bayasRecogidas = bayas;

//     let actorPos = this.actor.position;
//     let bayaPos = this.position;
//     let distance = Math.sqrt(
//       Math.pow(bayaPos.x - actorPos.x, 2) + Math.pow(bayaPos.y - actorPos.y, 2)
//     );

//     let sumaBayas = () => {
//       if (distance < this.bayaSize) {
//         this.touched = true;
//         for (let bayas = 0; bayas < 1; bayas++);
//         return bayas;

//       }
//       if (this.bayasRecogidas == 5) {
//         alert('You won');
//       }
//     };
//   }

//     draw(delta: number, ctx: CanvasRenderingContext2D) {
//       const bayero = "0/5";
//       ctx.font = '25px Arial';
//       ctx.fillStyle = 'white';
//       ctx.fillText(`Bayas: ${bayero}`, this.position.x, this.position.y);
//     }
//   }


////////////////////////////
//   addBaya(){
//     this.currentBaya++;
//     this.bayas.forEach((baya) => (baya.touched = false));

//     if (this.currentBaya = 5) {
//       alert("You won");
//     }
//   }

//   touchingBaya(): boolean {
//     if (this.bayas === 1) {
//       this.bayas++;

//   }
// }

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

// let preload = function (bayasRecogidas: number) {

//   bayasRecogidas = 0;

// },

// let update = function (bayasRecogidas: number) {

//   bayasRecogidas = 0;

//   //Bayas
//   juego.physics.arcade.overlap(this.actor, this.bayas, this.recogerBaya, null, this);

//   //Ganar
//   if (bayasRecogidas == 5) {
//       ganar(0);
//   }

// },

// let recogerBaya = function (actor: Pikachu, baya: Baya, bayasRecogidas: number) {

//   //baya.kill();
//   this.bayasRecogidas++;
//   var texto = document.getElementById('bayas');
//   Element.innerHTML = 5 - bayasRecogidas;

// }

// let ganar = function (maxSpeed: 0) {

//   //Le obligo a pararse
//   maxSpeed = 0;
//   //Animación de ganar
//   alert("¡Pikachu ha conseguido todas las bayas! Enhorabuena!")

// },
