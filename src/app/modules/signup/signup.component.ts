import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
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
  screenWidth: number = 1000;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    console.log(this.screenWidth);
  }

  handleMicrosoftSignup() {
    console.log('Signup with Microsoft');
  }

  handleGoogleSignup() {
    console.log('Signup with Google');
  }

  handleSlackSignup() {
    console.log('Signup with Slack');
  }
}
