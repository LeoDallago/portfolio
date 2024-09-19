import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SobreComponent} from "./components/sections/sobre/sobre.component";
import {HabilidadesComponent} from "./components/sections/habilidades/habilidades.component";
import {StackComponent} from "./components/sections/stack/stack.component";
import {ExperienciasComponent} from "./components/sections/experiencias/experiencias.component";
import {FormacoesComponent} from "./components/sections/formacoes/formacoes.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgClass, FooterComponent, NavbarComponent, SobreComponent, HabilidadesComponent, StackComponent, ExperienciasComponent, FormacoesComponent],
  templateUrl: "app.component.html",
})
export class AppComponent {

}
