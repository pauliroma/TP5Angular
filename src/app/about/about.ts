import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  name: string = "Kylian Mbappé";

  // injection du service dans le constructeur
  constructor(public activiteService: ActiviteService) {}
}