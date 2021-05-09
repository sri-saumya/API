import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubscribeComponent } from './listsubscribe.component';

describe('ListsubscribeComponent', () => {
  let component: ListsubscribeComponent;
  let fixture: ComponentFixture<ListsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
