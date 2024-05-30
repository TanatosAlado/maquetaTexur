import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membrete',
  templateUrl: './membrete.component.html',
  styleUrls: ['./membrete.component.css']
})
export class MembreteComponent {
  constructor(private router: Router){

  }
  logout(){
    this.router.navigate([''])
  }
}

