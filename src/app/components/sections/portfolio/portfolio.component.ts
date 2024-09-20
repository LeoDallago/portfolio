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
    foto:"/Locadora.png",
    descricao:"Locadora de Carros",
  },
  {
    foto:"/Adivinhacao.png",
    descricao:"Jogo de Adivinhacao",
  },
  {
    foto:"/EmpowerRH.png",
    descricao:"EmpowerRH",
  },
  {
    foto:"/EmpowerRH(React).png",
    descricao:"EmpowerRH (Versão em React)",
  },
]
}
