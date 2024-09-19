import { Component } from '@angular/core';
import {mIpsum} from "mipsum";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
public mipSum = mIpsum({
    pNum:1,
    resultType: "text"
  })
}
