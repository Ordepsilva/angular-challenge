import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() type: string = 'button'; //'button', 'submit', or 'reset'
  @Input() disabled: boolean = false;
  @Input() large: boolean = false;
  @Input() outlined: boolean = false;
  @Input() primary: boolean = false;
  @Input() secondary: boolean = false;
  @Input() tertiary: boolean = false;
  @Input() icon: string = '';
  @Input() iconPos = 'left';
  @Input() hasIcon: boolean = false;

  @Output() click = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    if (!this.disabled) {
      this.click.emit('clicked');
    }
  }
}
