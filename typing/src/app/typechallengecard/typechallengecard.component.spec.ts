import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypechallengecardComponent } from './typechallengecard.component';

describe('TypechallengecardComponent', () => {
  let component: TypechallengecardComponent;
  let fixture: ComponentFixture<TypechallengecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypechallengecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypechallengecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
