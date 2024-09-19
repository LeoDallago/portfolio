import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ItemFormacao} from "./models/item-Formacao";

@Component({
    selector: 'app-formacoes',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './formacoes.component.html',
    styleUrl: './formacoes.component.scss'
})
export class FormacoesComponent {
    public itensFormacao: ItemFormacao[] = [
        {
            periodo: "Fev/2015 - Dez/2023",
            local: "Centro Universitário Unifacvest",
            curso: "Ciencia da Computação (Bacharelado)",
            competencias: "Algoritmos, Logica de Programação, Redes de Computadores," +
                " Desenvolvimento Web, Banco de dados, Estruturas de dados."
        }
    ];
}
