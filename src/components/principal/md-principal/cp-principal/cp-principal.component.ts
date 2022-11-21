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
    }
    
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

