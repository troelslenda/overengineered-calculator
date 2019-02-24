import { Component, OnInit, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output() onKeypress = new EventEmitter<any>();
  // Listen for keypresses. If the accompanying button is present in dom, then
  // click the button, ultimately emitting the value.
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    event.preventDefault();
    // Transform some keystrokes to calculator operators.
    const key = event.key == 'Enter' ? '=' : event.key == 'Delete' ? 'ac' : event.key;
    const el = this.elementRef.nativeElement.querySelector(`[data-key='${key}']`)
    if (el) {
      el.click();
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const buttons = this.elementRef.nativeElement.querySelectorAll('button');
    buttons.forEach((el: HTMLElement) => el.addEventListener('click', () => {
      this.onKeypress.emit(el.dataset.key)
    }));
  }
}
