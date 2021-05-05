import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'apiconsumedemo';
  // products : Product[] = [];
  // productsubscription : Subscription;
  // constructor(private appservice : AppService)
  // {
  //   this.productsubscription = new Subscription();
  // }

  // ngOnInit()
  // {
  //   this.productsubscription = this.appservice.getItems().subscribe(
  //     data=>{
  //       this.products = data
  //     },
  //     error=>{
  //       console.log(error)
  //     },
  //     ()=> console.log('complete')
  //   )
  // }

  // ngOnDestroy()
  // {
  //   if(this.productsubscription)
  //   {
  //       this.productsubscription.unsubscribe();
  //   }

  // }
}
