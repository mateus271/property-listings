import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.type';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-saved-properties-modal',
  templateUrl: './saved-properties-modal.component.html',
  styleUrls: ['./saved-properties-modal.component.scss']
})

export class SavedPropertiesModalComponent implements OnInit {
  public savedProperties: Property[] = [];

  constructor(private propertiesService: PropertiesService) {}
  
  ngOnInit(): void {
    this.savedProperties = this.propertiesService.savedProperties;
  }
}
