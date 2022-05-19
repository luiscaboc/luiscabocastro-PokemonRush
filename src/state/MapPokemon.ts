import { Actor } from '../actors/Actor';
import { Comida } from '../actors/ObstaculoBaya';
import { Pikachu } from '../actors/Pikachu';

export class MapPokemon {
  totalbayas: Comida[];
  constructor(actor: Pikachu) {
    let num = 5;
    this.totalbayas = [];

    for (let i = 0; i < num; i++) {
        this.totalbayas.push(
        new Comida({ x: 200, y: 300 }, 100, actor),
        new Comida({ x: 200, y: 300 }, 100, actor),
        new Comida({ x: 200, y: 300 }, 100, actor),
        new Comida({ x: 200, y: 300 }, 100, actor),
        new Comida({ x: 200, y: 300 }, 100, actor)
      );
    }
  }
}

export let Mapa: MapPokemon;

export const createMap = (actor: Pikachu) => {
    Mapa = new MapPokemon (actor);
}

