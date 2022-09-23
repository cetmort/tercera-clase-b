import { Directive, Input, ElementRef,  OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{

  @Input('dynamicColor') color : string = ''
  @Input('colorEnter') colorEnter : string = ''
  @Input('sizeFont') sizeFont : string = ''
  
  @HostListener('mouseleave') mouseleave(){
    this.element.nativeElement.style.color = this.color
  }
  
  @HostListener('mouseenter') mouseenter(){
    this.element.nativeElement.style.color = this.colorEnter
  }


  constructor(private element: ElementRef) { 

  }

  ngOnInit():void{
    console.log(this.color)
    console.log(this.element.nativeElement)
  }

}
