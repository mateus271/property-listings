import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property.type';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss']
})

export class ListingsPage implements OnInit {
  public propertiesArray: Property[] = [];
  public filteredPropertiesArray: Property[] = [];

  public selectedBedrooms: number | null = null;
  public propertiesBedroomsArray: number[] = [];
  
  public selectedBathrooms: number | null = null;
  public propertiesBathroomsArray: number[] = [];
 
  public selectedParkingSpaces: number | null = null;
  public propertiesParkingSpacesArray: number[] = [];
  
  public minPriceRange: number;
  public maxPriceRange: number;
  public selectedMinPriceRange: number;
  public selectedMaxPriceRange: number;
  public propertiesPriceRangeArray: number[] = [];

  constructor(private propertiesService: PropertiesService, private router: Router){}

  ngOnInit(): void {
    this.getPropertiesServiceResponse();

    this.setPropertiesArray();
  }

  public viewPropertyDetails(id: number): void {
    this.router.navigate(['listing-details', id]); 
  }

  public filterProperties() {
    let multipleFiltersArray = this.propertiesArray;

    if (this.selectedBedrooms !== null && this.selectedBedrooms !== 0) {
      multipleFiltersArray = multipleFiltersArray.filter(property => property.Bedrooms === this.selectedBedrooms);
    }
    
    if (this.selectedBathrooms !== null && this.selectedBathrooms !== 0) {
      multipleFiltersArray = multipleFiltersArray.filter(property => property.Bathrooms === this.selectedBathrooms);
    }
    
    if (this.selectedParkingSpaces !== null && this.selectedParkingSpaces !== 0) {
      multipleFiltersArray = multipleFiltersArray.filter(property => property.Parking === this.selectedParkingSpaces);
    }

    multipleFiltersArray = multipleFiltersArray.filter(property => property.SalePrice >= this.selectedMinPriceRange);

    multipleFiltersArray = multipleFiltersArray.filter(property => property.SalePrice <= this.selectedMaxPriceRange);

    this.showSideBar();

    this.filteredPropertiesArray = multipleFiltersArray;
  }

  public clearFilters(): void {
    this.filteredPropertiesArray = this.propertiesArray;
    this.clearPriceRange();
    this.clearSelects();
    this.showSideBar();
  }

  public showSideBar(): void {
    const filterBar = document.querySelector('.filter-bar');
    filterBar!.classList.toggle('show');
  }

  private clearPriceRange() {
    this.selectedMinPriceRange = this.minPriceRange;
    this.selectedMaxPriceRange = this.maxPriceRange;
  }

  private clearSelects(): void {
    this.selectedBedrooms = null;
    this.selectedBathrooms = null;
    this.selectedParkingSpaces = null;
  }

  private getPropertiesServiceResponse() {
    this.propertiesService.getPropertiesResponse();
  }

  private setPropertiesArray() {
    this.propertiesService.propertiesArray$.subscribe({
      next: (propertiesArray: Property[]) => {
        this.filteredPropertiesArray = this.propertiesArray = propertiesArray;
        this.setFiltersQuantities();
      }
    });
  }

  private setFiltersQuantities() {
    this.setNumberOfBedrooms();
    this.setNumberOfBathrooms();
    this.setNumberOfParkingSpaces();
    this.setPriceRange();
  }

  private setNumberOfBedrooms() {
    let bedroomsArray = Array.from(new Set(this.propertiesArray.map(property => property.Bedrooms)));
    this.propertiesBedroomsArray = bedroomsArray.slice().sort((a, b) => a - b); 
  }

  private setNumberOfBathrooms() {
    let bathroomsArray = Array.from(new Set(this.propertiesArray.map(property => property.Bathrooms)));
    this.propertiesBathroomsArray = bathroomsArray.slice().sort((a, b) => a - b); 
  }

  private setNumberOfParkingSpaces() {
    let parkingSpacesArray = Array.from(new Set(this.propertiesArray.map(property => property.Parking)));
    this.propertiesParkingSpacesArray = parkingSpacesArray.slice().sort((a, b) => a - b); 
  }

  private setPriceRange() {
    let priceRangesArray = Array.from(new Set(this.propertiesArray.map(property => property.SalePrice)));
    this.propertiesPriceRangeArray = priceRangesArray.slice().sort((a, b) => a - b);
    this.minPriceRange = this.selectedMinPriceRange = this.propertiesPriceRangeArray[0];
    this.maxPriceRange = this.selectedMaxPriceRange = this.propertiesPriceRangeArray[this.propertiesPriceRangeArray.length - 1];
  }
}
