import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { ItemPortfolio } from "./models/item-portfolio";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
public itensPortfolio: ItemPortfolio[] = [
  {
    foto:"assets/Locadora.png",
    descricao:"Locadora de Carros",
  },
  {
    foto:"assets/Adivinhacao.png",
    descricao:"Jogo de Adivinhacao",
  },
  {
    foto:"assets/EmpowerRH.png",
    descricao:"EmpowerRH",
  },
  {
    foto:"assets/EmpowerRH(React).png",
    descricao:"EmpowerRH (Versão em React)",
  },
]
}
