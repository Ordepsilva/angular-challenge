import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
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
    trigger('fadeInOut', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            stagger(100, [
              animate(
                '0.5s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  currentStep: number = 1;
  screenWidth: number = 1000;
  invalidEmail: boolean = false;
  email: string = '';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
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
    return emailValidator.test(email);
  }

  isDomainAllowed(email: string): boolean {
    const disallowedDomains = ['gmail.com', 'yahoo.ie', 'mailinator.com'];
    const domain = email.substring(email.lastIndexOf('@') + 1);
    return !disallowedDomains.includes(domain);
  }

  handleEmailInput(input: string): void {
    this.email = input;
  }

  handleNextStep() {
    this.invalidEmail =
      !this.validateEmail(this.email) || !this.isDomainAllowed(this.email);

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
