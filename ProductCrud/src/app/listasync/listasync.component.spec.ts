import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasyncComponent } from './listasync.component';

describe('ListasyncComponent', () => {
  let component: ListasyncComponent;
  let fixture: ComponentFixture<ListasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
