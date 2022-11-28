import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-deportes',
  templateUrl: './cp-deportes.component.html',
  styleUrls: ['./cp-deportes.component.css']
})
export class CpDeportesComponent implements OnInit{
  constructor(private router:Router){}
    ngOnInit(): void {
    }
    cmbPrincipal(){
      this.router.navigate(['principal'])
    }
    cmbColegios(){
      this.router.navigate(['colegios'])
    }
    cmbGustos(){
      this.router.navigate(['gustos'])
    }
    cmbActividades(){
      this.router.navigate(['actividades'])
    }
  }

