import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-amante',
  templateUrl: './cp-amante.component.html',
  styleUrls: ['./cp-amante.component.css']
})
export class CpAmanteComponent implements OnInit{
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
    cmbDeportes(){
      this.router.navigate(['deportes'])
    }
  }

