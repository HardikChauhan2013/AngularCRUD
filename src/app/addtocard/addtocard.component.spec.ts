import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocardComponent } from './addtocard.component';

describe('AddtocardComponent', () => {
  let component: AddtocardComponent;
  let fixture: ComponentFixture<AddtocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
