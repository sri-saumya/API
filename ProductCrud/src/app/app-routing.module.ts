import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ListasyncComponent } from './listasync/listasync.component';
import { ListsubscribeComponent } from './listsubscribe/listsubscribe.component';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path  : 'home' , component : HomeComponent },
  {path  : 'listasync' , component : ListasyncComponent },
  {path  : 'listsubscribe' , component : ListsubscribeComponent },
  {path  : 'add' , component : AddComponent },
  {path  : 'update' , component : UpdateComponent },
  {path  : 'remove' , component : RemoveComponent },
  
  {path  : '' , redirectTo :'home',pathMatch :'full'  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
