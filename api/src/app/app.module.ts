import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListasyncComponent } from './listasync/listasync.component';
import { ListsubscribeComponent } from './listsubscribe/listsubscribe.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { RemoveComponent } from './remove/remove.component';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatIconModule} from'@angular/material/icon';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {MatListModule} from'@angular/material/list';
import {MatSelectModule} from'@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OperationComponent } from './operation/operation.component';
import { UpdateremoveComponent } from './updateremove/updateremove.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListasyncComponent,
    ListsubscribeComponent,
    AddComponent,
    UpdateComponent,
    RemoveComponent,
    MaterialtableComponent,
    OperationComponent,
    UpdateremoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
