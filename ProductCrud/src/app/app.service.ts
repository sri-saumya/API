import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';
import {catchError,tap} from 'rxjs/operators';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
   
  private myerrorhandler(err:any){
    console.log(err);
    return throwError(err);
  }

  getItems() : Observable<Product[]>
  {
    const apiurl = environment.apibaseurl+ "cal/items";
    const headers = {'content-type' : 'application/json'};

    return this.http.get<Product[]>(apiurl,{'headers' : headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=> this.myerrorhandler(error)
        // return throwError(error)
      )
    );
  }


  postProduct(task:Product) : Observable<Product>
  {
    const apiurl  = environment.apibaseurl+ "cal/items";
    const headers = {'content-type' : 'application/json'};
    Object.defineProperty(task,'id',{'enumerable' : false});
    return this.http.post<Product>(apiurl,task,{'headers': headers}).pipe(
      tap((task:any) => {
        console.log(task)
      }),
      catchError(error => this.myerrorhandler(error))
    );
  } 
 
  putProduct(id:number,task:Product): Observable<Product>
  {
    const apiurl  = environment.apibaseurl+ "cal/items";
    const headers = {'content-type' : 'application/json'};
    return this.http.put<Product>(apiurl,task,{'headers': headers}).pipe(
     
      catchError(error => this.myerrorhandler(error))
    );
  }

 
  removeProduct(task:Product): Observable<Product>
  {
      
    const apiurl  = environment.apibaseurl+ "cal/items";
    const headers = {'content-type' : 'application/json'};
    return this.http.put<Product>(apiurl,task,{headers: headers}).pipe(
     
      catchError(error => this.myerrorhandler(error))
    );
  }

}

