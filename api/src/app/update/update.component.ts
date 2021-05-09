import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})



export class UpdateComponent implements OnInit {

  products$: Observable<Product[]>;
  selectidControl: FormControl = new FormControl(0);
  showProductDetails: boolean = false;
  editform: FormGroup | any;
 
  constructor(private fb: FormBuilder, private myservice: AppService, private router:Router) {
    this.products$ = new Observable<Product[]>();
    this.editform = this.fb.group({
      title: ['', Validators.required],
      price: [ ,[Validators.required, Validators.min(0)]],
      quantity: [ ,[Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      inStock: [true,Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.products$ = this.myservice.getItems();
  }
 
  showDetails() {
    if (this.selectidControl.value != "0") {
      this.showProductDetails = true;
      this.myservice.getproductById(this.selectidControl.value).subscribe(
        data => {
  
          this.editform.get('title').setValue(data.title);
          this.editform.get('price').setValue(data.price);
          this.editform.get('quantity').setValue(data.quantity);
          this.editform.get('color').setValue(data.color);
          this.editform.get('expirydate').setValue(data.expiryDate);
          this.editform.get('inStock').setValue(data.inStock);
        }
      );
    }
  }
 
  update(){
    
    //this.myservice.getproductById(this.editform.controls['id'].value)
    let product:Product = {...this.editform.value};
    product.id = Number(this.selectidControl.value);
    this.myservice.putProduct(product).subscribe(
      ()=>this.router.navigate(['/home'])

    );
   
  }

}