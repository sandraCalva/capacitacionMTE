import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';


interface City {
  name: string,
  code: string
}



@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {
    @Input() letras : string[] = [];
    @Input() vocales : any[] = [];
    @Input() cities : any[] = [];

   // selectedCity: City;

    constructor() {
       
       
    }



    ngOnInit(): void {
    }

}



