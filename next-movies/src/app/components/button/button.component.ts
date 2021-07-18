import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  buttonText: string = '';

  @Input()
  buttonDirection: 'ltr' | 'rtl' = 'ltr';

  @Output() click: EventEmitter<null> = new EventEmitter();

  constructor() { }

  onClick(event: Event): void {
    event.stopPropagation();
    this.click.emit();
  }

}
