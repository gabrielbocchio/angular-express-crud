import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routering.module';
import { HttpClientModule} from '@angular/common/http'
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
