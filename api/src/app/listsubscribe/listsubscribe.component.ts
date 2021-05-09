import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-listsubscribe',
  templateUrl: './listsubscribe.component.html',
  styleUrls: ['./listsubscribe.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class ListsubscribeComponent implements OnInit, OnChanges{
  
  @Input() product:Observable<Product[]>;
  ubaseurl="updateproduct" ;
  dbaseurl="removeproduct" ;
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
  
}

