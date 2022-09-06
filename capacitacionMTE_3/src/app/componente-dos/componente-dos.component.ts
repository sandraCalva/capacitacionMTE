import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
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

    @Output () envioPadre = new EventEmitter<any>();

   // selectedCity: City;


    constructor() {
       
    }
    ngOnInit(): void {

      
    }

    enviarPadre(){
      this.envioPadre.emit("esto envio desde padre ");
      console.log('desaCTIVE');

    }  

    

}



