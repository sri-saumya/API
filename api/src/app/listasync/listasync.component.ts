import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-listasync',
  templateUrl: './listasync.component.html',
  styleUrls: ['./listasync.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class ListasyncComponent implements OnInit{
  @Input() products$ : Observable<Product[]>
  @Output() deleteevent : EventEmitter<any> = new EventEmitter<any>();
  ubaseurl="updateproduct" ;
  dbaseurl="removeproduct" ;
  
  constructor(private appservice : AppService)
  {
    this.products$ = new Observable<Product[]>();
  }

  ngOnInit()
  {
    //this.products$ = this.appservice.getItems();
  }

  update(id : any)
  {
    this.appservice.getproductById(id) ;
  }
  

  delete(product : Product)
  {
    this.deleteevent.emit(product) ;

  }
  
}