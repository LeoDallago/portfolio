import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ItemExperiencia} from "./models/item-Experiencia";

@Component({
    selector: 'app-experiencias',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './experiencias.component.html',
    styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {
    public itensExperiencia: ItemExperiencia[] = [
        {
            periodo: "Mar/2024 - Atualmente",
            local: "Academia do Programador",
            funcao: "Desenvolvedor trainee",
            stack:".NET Framework, .NET 8, Entity Framework Core, ASP.NET Core MVC, ASP.NET Web API," +
                " MSTest, Docker, Angular."
        },
        {
            periodo: "Mar/2023 - Dez/2023",
            local: "Unifacvest Tech",
            funcao: "Estagiário",
            stack:"Node.js, React, ReactNative, MongoDB, MySQL, Sequelize."
        }
    ];
}
