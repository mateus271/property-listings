import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PropertiesResponse } from "../models/propertiesResponse.type";
import { Property } from "../models/property.type";
import { Subject, Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class PropertiesService {
    public propertiesArray$: Subject<Property[]> = new Subject<Property[]>();
    public propertiesArray: Property[] = [];

    public savedProperties: Property[] = [];

    private url: string = environment.url;

    constructor(private httpClient: HttpClient) {}

    public getPropertiesResponse(): void {
        this.httpClient.get<Property[]>('/assets/properties.json').subscribe({
            next: (data) => {
                this.propertiesArray$.next(data);
                this.propertiesArray = data;
            },
            error: (error) => {
                console.error('Error:', error);
            }
        });
    }

    public saveProperty(propertyToSave: Property): string {
        let propertyToSaveId = propertyToSave.Id;
        if (this.checkIfPropertyIsAlreadySaved(propertyToSaveId)) {
            return "Property already saved!";
        } else {
            this.savedProperties.push(propertyToSave);
            return "Property saved!";
        }
    }

    public checkIfPropertyIsAlreadySaved(propertyToSaveId: number): boolean {
        let index = this.savedProperties.findIndex(property => property.Id == propertyToSaveId);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    }
}