import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPage } from './pages/listings-page/listings.page';
import { ListingDetailsPage } from './pages/listing-details/listing-details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listings-page',
    pathMatch: 'full'
  },
  {
    path: 'listings-page',
    component: ListingsPage
  },
  {
    path: 'listing-details/:propertyId',
    component: ListingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
