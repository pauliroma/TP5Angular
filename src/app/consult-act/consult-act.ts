import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  index: number;

  constructor(private actRoute: ActivatedRoute, private router: Router, public activiteService: ActiviteService){
    // récupère l'indice transmis dans l'URL
    this.index = Number(actRoute.snapshot.params['idAct']);
  }

  // supprime l'élément puis redirige vers la page principale
  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.router.navigate(['']);
  }
}