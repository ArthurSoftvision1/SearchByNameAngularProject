import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColumnResize]',
})
export class ColumnResizeDirective {
  private startX: number = 0;
  private startWidth: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.startX = event.pageX;
    this.startWidth = this.elementRef.nativeElement.offsetWidth;

    this.renderer.addClass(document.body, 'column-resizing');
    this.renderer.addClass(this.elementRef.nativeElement, 'resizing');

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    const offsetX = event.pageX - this.startX;
    const newWidth = this.startWidth + offsetX;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'width',
      `${newWidth}px`
    );
  };

  onMouseUp = (): void => {
    this.renderer.removeClass(document.body, 'column-resizing');
    this.renderer.removeClass(this.elementRef.nativeElement, 'resizing');

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}
