import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-listasync',
  templateUrl: './listasync.component.html',
  styleUrls: ['./listasync.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class ListasyncComponent implements OnInit{
  @Input() products$ : Observable<Product[]>
  
 
  
  constructor()
  {
    this.products$ = new Observable<Product[]>();
  }

  ngOnInit()
  {
    //this.products$ = this.appservice.getItems();
  }

  
}