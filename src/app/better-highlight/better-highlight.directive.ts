import { Directive,
         Renderer2,
         ElementRef,
         OnInit,
         HostListener,
         HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  // Host Lister Example

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // fourth argument is optional. We can set !important in that argument
  }

  // @HostListener('mouseenter') mouseEnter() {
  //   // hostLister decorator is added to a method we want to execute on an event
  //   // the event that we are listening for is aded as an argument for host listener
  //   // listening for mouseenter event on host
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  // }

  // @HostListener('mouseleave') mouseOut() {
  //   // Listening for mouse leave event on host
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  // }


  // Host Binding Example

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // Bind to host property using hot binding
  // Define in string
  // camelCase property name because we are accessing DOM property not CSS

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseOut() {
    this.backgroundColor = 'treansparent';
  }
}


