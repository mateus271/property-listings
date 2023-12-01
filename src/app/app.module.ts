import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingsPageModule } from './pages/listings-page/listings-page.module';
import { ListingDetailsPageModule } from './pages/listing-details/listing-details-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SavedPropertiesModalComponent } from './modals/saved-properties-modal/saved-properties-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SavedPropertiesModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListingsPageModule,
    ListingDetailsPageModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
