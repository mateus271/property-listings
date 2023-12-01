import { NgModule } from '@angular/core';
import { ListingDetailsPage } from './listing-details.page';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListingDetailsPage
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})

export class ListingDetailsPageModule {}
