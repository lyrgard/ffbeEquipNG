import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[clickPropagationStop]'
})
export class ClickPropagationStopDirective {

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
