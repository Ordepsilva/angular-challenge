import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IconPosition } from '../../enums/icon-position.enum';
import { ButtonType } from '../../enums/button-type.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() type: ButtonType = ButtonType.Button;
  @Input() disabled: boolean = false;
  @Input() customStyle: string = 'primary';
  @Input() iconDescription: string = '';
  @Input() large: boolean = false;

  @Input() matIcon: string = '';
  @Input() svgIcon: string = '';
  @Input() iconPos: IconPosition = IconPosition.Left;
  @Input() hasIcon: boolean = false;

  @Output() click = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    if (!this.disabled) {
      console.log('asd');
    }
  }
}
