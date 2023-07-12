import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSearchComponent } from './table.component';

describe('TableWithSearchComponent', () => {
  let component: TableWithSearchComponent;
  let fixture: ComponentFixture<TableWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
