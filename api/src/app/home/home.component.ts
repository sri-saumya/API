import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item : Product;
  products : Observable<Product[]>;
  
  constructor(private appservice : AppService)
  {
    
    this.products = new Observable<Product[]>();
  }

  ngOnInit(): void {
    this.products = this.appservice.getItems();
  }


  deleteparent(item : Product)
  {
     
      this.appservice.deleteProduct(item).subscribe(
        ()=> {this.products = this.appservice.getItems();}
      ) ;
  }

}
