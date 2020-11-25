import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  //This is a way to set color by using directives along with initialising the value in constructor
  // @Input() backgroundColor: string;
  constructor(private element: ElementRef) {
    //Setting color by using directives. Refer above comment
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @Input('appClass') set classNames(classObj : any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      }else {
        this.element.nativeElement.classList.remove(key);
      }
    }
    
  }

}
