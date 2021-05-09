import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateremoveComponent } from './updateremove.component';

describe('UpdateremoveComponent', () => {
  let component: UpdateremoveComponent;
  let fixture: ComponentFixture<UpdateremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
