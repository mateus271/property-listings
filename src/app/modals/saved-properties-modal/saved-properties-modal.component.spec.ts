import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPropertiesModalComponent } from './saved-properties-modal.component';

describe('SavedPropertiesModalComponent', () => {
  let component: SavedPropertiesModalComponent;
  let fixture: ComponentFixture<SavedPropertiesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedPropertiesModalComponent]
    });
    fixture = TestBed.createComponent(SavedPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
