import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferpageComponent } from './transferpage.component';

describe('TransferpageComponent', () => {
  let component: TransferpageComponent;
  let fixture: ComponentFixture<TransferpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferpageComponent]
    });
    fixture = TestBed.createComponent(TransferpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
