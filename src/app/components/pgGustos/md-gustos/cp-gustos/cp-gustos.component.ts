import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-gustos',
  templateUrl: './cp-gustos.component.html',
  styleUrls: ['./cp-gustos.component.css']
})
export class CpGustosComponent implements OnInit{
  constructor(private router:Router){}
    ngOnInit(): void {
    }
    cmbPrincipal(){
      this.router.navigate(['principal'])
    }
    cmbColegios(){
      this.router.navigate(['colegios'])
    }
    cmbActividades(){
      this.router.navigate(['actividades'])
    }
    cmbDeportes(){
      this.router.navigate(['deportes'])
    }
  }

