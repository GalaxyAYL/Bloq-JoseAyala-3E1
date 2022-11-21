import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-colegios',
  templateUrl: './cp-colegios.component.html',
  styleUrls: ['./cp-colegios.component.css']
})
export class CpColegiosComponent implements OnInit {constructor(private router:Router){}
    ngOnInit(): void {
    }
    cmbActividades(){
      this.router.navigate(['actividades'])
    }
    cmbPrincipal(){
      this.router.navigate(['principal'])
    }
    cmbGustos(){
      this.router.navigate(['gustos'])
    }
    cmbDeportes(){
      this.router.navigate(['deportes'])
    }
  }
