import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[basicHighlight]', // camle Case Always
})

export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef) {} // To access the element this directive sits on


  // Doesn't have any other lifecycle hooks because there is no template associated with a directive
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  ngOnDestroy() {}
}
