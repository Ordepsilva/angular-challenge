import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-path-unavailable',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './path-unavailable.component.html',
  styleUrl: './path-unavailable.component.css',
})
export class PathUnavailableComponent {
  constructor(private router: Router){

  }
  handleGoBack(){
    this.router.navigate(['/']) ;
   }
}
