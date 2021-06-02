import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('../pages/listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../pages/location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: '',
        redirectTo: '/home/listing',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
