import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LinkNavbar} from "./models/link-navbar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
      NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public colapsarNavbar: boolean = false;

  public linksNavBar : LinkNavbar[] = [
    { href: "#sobre", texto: "Sobre Min" },
    { href: "#habilidades", texto: "Minhas Habilidades" },
    { href: "#stack", texto: "Stack" },
    { href: "#experiencias", texto: "Experiências" },
    { href: "#formacoes", texto: "Formações" },
    { href: "#portfolio", texto: "Portfolio" },
  ];
}
