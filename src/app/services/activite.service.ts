import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  objectifs: string[] = ['Un element', 'deux elements', 'trois elements!'];

  // supprime l'élément à l'indice donné
  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }
}