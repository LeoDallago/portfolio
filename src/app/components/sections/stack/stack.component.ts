import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ItemStack} from "./models/item-Stack";

@Component({
    selector: 'app-stack',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './stack.component.html',
    styleUrl: './stack.component.scss'
})
export class StackComponent {
public itensStack: ItemStack[] = [
    {
        texto:".Net"
    },
    {
        texto: "Node.js",
    },
    {
        texto: "Angular"
    },
    {
        texto: "JavaScript/TypeScript"
    },
    {
        texto: "React"
    },
    {
        texto: "Microsoft SQL Server"
    },
    {
        texto: "MySQL"
    },
    {
        texto: "Entity Framework"
    },
    {
        texto: "MongoDB"
    },
    {
        texto: "Sequelize"
    },
    {
        texto: "Selenium"
    },
    {
        texto: "Cypress"
    }
];
}
