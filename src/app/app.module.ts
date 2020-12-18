import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@bit/primefaces.primeng.button';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  imports: [
    ButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    ProductListModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


