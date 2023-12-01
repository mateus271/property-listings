import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsPage } from './listing-details.page';

describe('ListingDetailsPage', () => {
  let component: ListingDetailsPage;
  let fixture: ComponentFixture<ListingDetailsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDetailsPage]
    });
    fixture = TestBed.createComponent(ListingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
