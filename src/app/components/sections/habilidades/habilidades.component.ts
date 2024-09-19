import {Component} from '@angular/core';
import {ItemHabilidades} from "./models/item-habilidades";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-habilidades',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './habilidades.component.html',
    styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
public itensHabilidades: ItemHabilidades[] = [
    {
        icone: "bi bi-window-fullscreen",
        titulo:"Web Design",
        descricao:"Design e desenvolvimento de sistemas web atraentes e responsivos."
    },
    {
        icone: "bi bi-server",
        titulo:"Testes Automatizados",
        descricao:"Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações."
    },
    {
        icone: "bi bi-hdd-rack",
        titulo:"Aplicações Back-End",
        descricao:"Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos."
    },
    {
        icone: "bi bi-wrench",
        titulo:"Engenharia de Software",
        descricao:"Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável."
    },
    {
        icone: "bi bi-people",
        titulo:"Liderança",
        descricao:"Habilidade de liderar e tomar decisões técnicas em projetos em equipe."
    },
    {
        icone: "bi bi-person-raised-hand",
        titulo:"Comunicação",
        descricao:"Habilidade de comunicação e explicação para idividuos ou em publico."
    },


];
}
