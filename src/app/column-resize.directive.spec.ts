import { ElementRef, Renderer2 } from '@angular/core';
import { ColumnResizeDirective } from './column-resize.directive';

describe('ColumnResizeDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: jasmine.createSpyObj('nativeElement', ['offsetWidth'])
    };
    const rendererMock = jasmine.createSpyObj('renderer', ['addClass', 'removeClass', 'setStyle']);
    const directive = new ColumnResizeDirective(
      elementRefMock as ElementRef,
      rendererMock as Renderer2
    );
    expect(directive).toBeTruthy();
  });
});
