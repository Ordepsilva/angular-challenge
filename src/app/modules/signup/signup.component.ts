import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ProgressIndicatorComponent } from '../../shared/components/progress-indicator/progress-indicator.component';
import { SignupBottomBarComponent } from '../../shared/layouts/signup-bottom-bar/signup-bottom-bar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ProgressIndicatorComponent,
    MatIconModule,
    SignupBottomBarComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  currentStep: number = 1;
}
