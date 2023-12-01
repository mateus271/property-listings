import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property.type';
import { ModalService } from 'src/app/services/modal.service';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-listing-details-page',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss']
})

export class ListingDetailsPage implements OnInit {
  public property: Property;
  public contactAgent: FormGroup;
  public isFormValid: boolean;
  public isPropertySaved: boolean;
  
  private propertyId: number = 0;

  constructor(private propertiesService: PropertiesService, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private modalService: ModalService, private location: Location){
    this.contactAgent = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      comments: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['propertyId'];

    this.getPropertyInfo();

    this.checkIfPropertyIsSaved();

    console.log('propriedade salva?', this.isPropertySaved);
  }

  public validateInput() {
    Object.keys(this.contactAgent.controls).forEach(field => {
      const control = this.contactAgent.get(field);
      control!.markAsTouched({ onlySelf: true });
    });

    if (this.contactAgent.valid) {
      this.isFormValid = true;
      this.contactAgent.reset();
    } 
  }

  public checkIfPropertyIsSaved(): void {
    const isSaved: boolean = this.propertiesService.checkIfPropertyIsAlreadySaved(this.propertyId);

    if (isSaved) {
      this.isPropertySaved = true;
    } else {
      this.isPropertySaved = false;
    }
  }

  public saveProperty(): void {
    if (this.isPropertySaved) {
      console.log("property already saved!");
    } else {
      this.propertiesService.saveProperty(this.property);
      this.isPropertySaved = true;
    }

    this.modalService.showSavedPropertiesModal();
  }

  public goBack(): void {
    this.location.back();
  }

  private getPropertyInfo() {
    let propertyIndex = this.findPropertyIndexInPropertiesArray();
    this.property = this.propertiesService.propertiesArray[propertyIndex];
  }

  private findPropertyIndexInPropertiesArray(): number {
    return this.propertiesService.propertiesArray.findIndex(property => property.Id == this.propertyId);
  }
}


