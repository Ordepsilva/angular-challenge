import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ProgressIndicatorComponent } from '../../shared/components/progress-indicator/progress-indicator.component';
import { SignupBottomBarComponent } from '../../shared/layouts/signup-bottom-bar/signup-bottom-bar.component';
import { InputComponent } from '../../shared/components/input/input.component';

import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ProgressIndicatorComponent,
    MatIconModule,
    SignupBottomBarComponent,
    InputComponent,
  ],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        query('.animate', style({ opacity: 0 })),
        query(
          '.animate',
          stagger('150ms', [animate('150ms ease-in', style({ opacity: 1 }))])
        ),
        query('.guided-flow', [
          animate(
            '300ms ease-out',
            style({ transform: 'translateY(0) scale(1)', opacity: 1 })
          ),
          style({ transform: 'translateY(100%) scale(0.8)' }),
        ]),
      ]),
    ]),
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  currentStep: number = 1;
  screenWidth: number = 480;
  invalidEmail: boolean = false;
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth; // Get initial screen width on load
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  handleCloseIcon() {
    this.router.navigate(['/home']);
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

  validateEmail(email: string): boolean {
    const emailValidator = /\S+@\S+\.\S+/;
    return emailValidator.test(email) && this.isDomainAllowed(email);
  }

  isDomainAllowed(email: string): boolean {
    const disallowedDomains = ['gmail.com', 'yahoo.ie', 'mailinator.com'];
    const domain = email.substring(email.lastIndexOf('@') + 1);
    return !disallowedDomains.includes(domain);
  }

  handleEmailInput(input: string): void {
    this.email = input;

    if (this.invalidEmail) {
      this.invalidEmail = !this.validateEmail(this.email);
    }
  }

  handleNextStep() {
    this.invalidEmail = !this.validateEmail(this.email);

    if (!this.invalidEmail) {
      this.currentStep = this.currentStep + 1;
    } else {
      this.email = '';
    }
  }

  handleGoBack() {
    this.currentStep -= 1;
  }
}
