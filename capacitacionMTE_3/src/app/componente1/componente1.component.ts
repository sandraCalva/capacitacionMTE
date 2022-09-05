import { Component, Input, OnInit } from '@angular/core';


 
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  @Input()  entrada : string= ""


  
  nombreBoton ="bye";
  constructor() { }

  ngOnInit(): void {
    this.primeraFuncionSuma();
    console.log(this.entrada);
  }

  primeraFuncionSuma() {
    console.log("estoy sumando" + "1+2");
    console.info("soy un info");
    console.log("soy un log");
    console.warn("soy un warn");
    console.error("soy un error");

  }



  

}
