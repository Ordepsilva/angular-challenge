import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTypeEnum } from '../../enums/input-type.enum';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() customClass: string = '';
  @Input() inputType: InputTypeEnum = InputTypeEnum.Text;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
