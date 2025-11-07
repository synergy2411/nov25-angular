import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() favColor: string = 'transparent';

  // Binds the host element attribute to the class property
  @HostBinding('style.background-color') bgColor!: string;

  ngOnInit(): void {
    // this.bgColor = 'transparent';
  }

  // Listen the event occured on the host element
  @HostListener('mouseenter')
  onMouserEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // ngOnInit(): void {
  //   // console.log('NATIVE ELEMENT : ', this.elRef.nativeElement);
  //   // this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'lightblue'
  //   );
  // }
}
