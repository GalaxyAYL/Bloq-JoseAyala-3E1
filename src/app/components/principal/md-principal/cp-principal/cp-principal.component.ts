import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-principal',
  templateUrl: './cp-principal.component.html',
  styleUrls: ['./cp-principal.component.css']
})

export class CpPrincipalComponent implements OnInit{
  constructor(private router:Router){}


    ngOnInit(): void {
      console.log("Suma 1:",this.total())
      this.total2();
    }

//--------------------------------METODOS MIOS--------------------------------
    suma:number=0;
    suma2:number=0;
    sumaFinal:number=0;

    total ():number
    {
      let num1:number=2;
      let num2:number=2;
      this.suma=num1+num1;
      return this.suma;
    }

    total2()
    {
      this.suma2=this.total()+5;
      console.log("Suma 2:",this.suma2);
      this.totalFinal(this.suma2);
    }

    totalFinal (suma2:number)
    {
      this.sumaFinal=suma2*2;
      console.log("Suma Final:",this.sumaFinal);
      
    }
//--------------------------------METODOS MIOS--------------------------------
    cmbActividades(){
      this.router.navigate(['actividades'])
    }
    cmbColegios(){
      this.router.navigate(['colegios'])
    }
    cmbGustos(){
      this.router.navigate(['gustos'])
    }
    cmbDeportes(){
      this.router.navigate(['deportes'])
    }
  }

