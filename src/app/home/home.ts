import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";

  // ajouter un constructeur pour avoir l'ajout du routeur en paramètre
  constructor(private monRouteur: Router, public activiteService: ActiviteService){
    // setTimeout(()=> {monRouteur.navigate(['about2'])}, 5000 );

  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.activiteService.objectifs.length;
  }

  ngOnInit() {
    this.nbItems = this.activiteService.objectifs.length;
  }

  // ouvre la page consultAct avec l'indice de l'activité dans l'URL
  consulter(index: number) {
    this.monRouteur.navigate(['/consultAct', index]);
  }

}