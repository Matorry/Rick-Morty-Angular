import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character.card.component';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCardComponent]
    });
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
