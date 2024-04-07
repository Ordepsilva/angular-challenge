import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ProgressIndicatorComponent } from '../../components/progress-indicator/progress-indicator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-bottom-bar',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ProgressIndicatorComponent],
  templateUrl: './signup-bottom-bar.component.html',
  styleUrl: './signup-bottom-bar.component.css',
})
export class SignupBottomBarComponent {
  @Input() currentStep: number = 1;

  @Output() clickBack = new EventEmitter<string>();
  @Output() clickNext = new EventEmitter<string>();

  handleGoBack() {
    this.clickBack.emit('back');
  }

  handleNext() {
    this.clickNext.emit('next');
  }

  getButtonLabel(currentStep: number) {
    switch (currentStep) {
      case 1:
        return 'Next Step';
      case 2:
        return 'Next: Verify Email';
      case 3:
        return 'Next: Set password';
      case 4:
        return 'Finish: Set Profile';
      default:
        return 'Next Step';
    }
  }
}
