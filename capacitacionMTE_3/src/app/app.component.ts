import { Component } from '@angular/core';


interface City {
  name: string,
  code: string
}

interface Vocales {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'capacitacionMTE_3';
  cities: any[];
  selectedCities: string[] = [];
  letrasAPPComponent:any[] = [ { name: "J", code: "NY" }];
  
  
  vocales: Vocales[]= [ ];
  
  constructor() {
     
      this.cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
      ];

      this.vocales = [
        {name: 'A', code: 'Aa'},
        {name: 'E', code: 'Ee'},
        {name: 'I', code: 'Ii'},
        {name: 'O', code: 'Oo'},
        {name: 'U', code: 'Uu'}
    ];
    }

}



