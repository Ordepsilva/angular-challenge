import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.css',
})
export class ProgressIndicatorComponent {
  @Input() currentStep: number = 1;
  @Input() numberOfSteps: number = 4;
  @Input() activeStepColor: string = 'blue';
  @Input() vertical: boolean = false;
  @Input() backgroundColor: string = 'white';

  constructor() {}

  ngOnInit(): void {}

  getStepStyle(step: number) {
    return {
      'background-color':
        step <= this.currentStep ? this.activeStepColor : this.backgroundColor,
    };
  }

  getSteps() {
    const steps = [];
    for (let i = 1; i <= this.numberOfSteps; i++) {
      steps.push(i);
    }
    return steps;
  }
}
