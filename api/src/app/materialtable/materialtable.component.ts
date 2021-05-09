import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-materialtable',
  templateUrl: './materialtable.component.html',
  styleUrls: ['./materialtable.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})



export class MaterialtableComponent implements OnInit,OnChanges{
  
  @Input() product:Observable<Product[]>;
  products : Product[] = [];
  productsubscription : Subscription;

  constructor(private cd: ChangeDetectorRef)
  {
    this.productsubscription = new Subscription();
    this.product = new Observable<Product[]>();
  }

  ngOnInit()
  {
    
  }

  ngOnChanges()
  {
    this.productsubscription = this.product.subscribe(data=>{
      this.products =data
      this.cd.markForCheck();});
  }
  displayedColumns: string[] = ['ID', 'Title', 'Price', 'Quantity' ,'Color','ExpiryDate'];
  
}
